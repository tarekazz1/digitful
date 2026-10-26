param([Parameter(Mandatory)][string]$Dist, [Parameter(Mandatory)][string]$PreparePreview)
$ErrorActionPreference = 'Stop'
function Assert($Condition, $Message) { if (!$Condition) { throw $Message } }
$Dist = (Resolve-Path -LiteralPath $Dist).Path
$xml = [xml](Get-Content -LiteralPath "$Dist/sitemap.xml" -Raw)
Assert ($xml.DocumentElement.LocalName -eq 'urlset') 'Wrong sitemap root'
Assert ($xml.DocumentElement.NamespaceURI -eq 'http://www.sitemaps.org/schemas/sitemap/0.9') 'Wrong namespace'
$urls = @($xml.urlset.url | ForEach-Object { [string]$_.loc })
Assert ($urls.Count -eq (@($urls | Sort-Object -Unique)).Count) 'Duplicate sitemap URLs'
Assert (!$xml.SelectNodes('//*[local-name()="lastmod" or local-name()="priority" or local-name()="changefreq"]').Count) 'Unexpected sitemap fields'
$eligible = @()
$htmlFiles = @(Get-ChildItem -LiteralPath $Dist -Filter '*.html' -Recurse)
foreach ($file in $htmlFiles) {
    $relative = [IO.Path]::GetRelativePath($Dist, $file.FullName).Replace('\', '/')
    $html = Get-Content -LiteralPath $file.FullName -Raw
    if ($relative -match '^(404\.html|thank-you/|_?type-test/|knowledge/|assets/|scripts/)') { continue }
    if ($html -match '<meta\b(?=[^>]*name="robots")[^>]*content="[^"]*noindex') { continue }
    $canonical = [regex]::Match($html, '<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"').Groups[1].Value
    Assert ($canonical -ne '') "Missing canonical: $relative"
    $expectedPath = '/' + ($relative -replace 'index\.html$', '')
    Assert (([uri]$canonical).AbsolutePath -ceq $expectedPath) "Canonical path mismatch: $relative"
    $eligible += $canonical
}
Assert (!(Compare-Object @($eligible | Sort-Object -Unique) @($urls | Sort-Object))) 'Incomplete sitemap'
foreach ($url in $urls) {
    $parsed = [uri]$url
    Assert ($parsed.Scheme -eq 'https' -and $parsed.Authority -eq 'digitful.ca') "Wrong origin: $url"
    Assert (!$parsed.Query -and !$parsed.Fragment -and $parsed.AbsolutePath.EndsWith('/')) "Invalid canonical: $url"
    Assert ($parsed.AbsolutePath -notmatch '^/(404|thank-you|_?type-test|knowledge|assets|scripts)(/|\.|$)') "Excluded URL: $url"
}
Assert (!($urls -match 'task-13-draft-fixture')) 'Draft fixture leaked into sitemap'
Assert (!(Test-Path -LiteralPath "$Dist/blog/task-13-draft-fixture")) 'Draft route generated'
$blog = Join-Path (Split-Path $Dist) 'src/content/blog'
foreach ($article in (Get-ChildItem -LiteralPath $blog -Filter '*.md' -Recurse)) {
    if ((Get-Content -LiteralPath $article.FullName -Raw) -match '(?m)^draft:\s*true\s*$') { continue }
    $slug = [IO.Path]::GetRelativePath($blog, $article.FullName).Replace('\', '/') -replace '\.md$', ''
    Assert ($urls -ccontains "https://digitful.ca/blog/$slug/") "Published article missing: $slug"
}
Assert ((Get-Content -LiteralPath "$Dist/robots.txt" -Raw).Replace("`r", '') -ceq "User-agent: *`nAllow: /`nSitemap: https://digitful.ca/sitemap.xml`n") 'Wrong production robots'
$copy = Join-Path ([IO.Path]::GetTempPath()) ('digitful-task13-' + [guid]::NewGuid())
try {
    Copy-Item -LiteralPath $Dist -Destination $copy -Recurse
    & node $PreparePreview $copy
    Assert ($LASTEXITCODE -eq 0) 'Preview preparation failed'
    Assert ((Get-Content -LiteralPath "$copy/robots.txt" -Raw) -ceq "User-agent: *`nDisallow: /`n") 'Preview crawling open'
    $hashes = @{}
    foreach ($file in (Get-ChildItem -LiteralPath $copy -File -Recurse)) {
        $hashes[$file.FullName] = (Get-FileHash -LiteralPath $file.FullName).Hash
        if ($file.Extension -ne '.html') { continue }
        $html = Get-Content -LiteralPath $file.FullName -Raw
        $robots = [regex]::Matches($html, '<meta\b[^>]*name="robots"[^>]*>')
        Assert ($robots.Count -eq 1 -and $robots[0].Value.Contains('noindex,nofollow,noarchive')) 'Preview noindex missing/duplicated'
        Assert (!$html.Contains('GTM-53THDCJH')) 'Production GTM retained'
        Assert ($html.Contains('Preview site: form submission is disabled.')) 'Submission guard missing'
    }
    & node $PreparePreview $copy
    Assert ($LASTEXITCODE -eq 0) 'Second preview preparation failed'
    foreach ($file in (Get-ChildItem -LiteralPath $copy -File -Recurse)) {
        Assert ($hashes[$file.FullName] -ceq (Get-FileHash -LiteralPath $file.FullName).Hash) 'Preview preparation not idempotent'
    }
    Write-Output "PASS: $($urls.Count) canonical URLs; $($urls.Where({$_ -match '/blog/.+/' }).Count) articles; XML, exclusions, draft fixture, production robots and preview safeguards/idempotence."
} finally {
    $resolved = [IO.Path]::GetFullPath($copy)
    Assert ($resolved.StartsWith([IO.Path]::GetFullPath([IO.Path]::GetTempPath())) -and (Split-Path $resolved -Leaf) -match '^digitful-task13-[0-9a-f-]+$') 'Unsafe cleanup path'
    if (Test-Path -LiteralPath $resolved) { Remove-Item -LiteralPath $resolved -Recurse -Force }
}

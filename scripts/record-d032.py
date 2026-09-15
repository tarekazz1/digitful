from pathlib import Path

source = '383ccfa90f67ad62b9fafb98492332e25cb180e2'
preview_run = '35005971482'

p = Path('docs/visual-refresh/DECISIONS.md')
s = p.read_text()
marker = '---\n\n## Current pending decisions'
if '## D032 — Refine the third system step and hero CTA' not in s:
    block = f'''---\n\n## D032 — Refine the third system step and hero CTA\n**Status:** Approved — KEEP\n\nRefine two homepage labels after final messaging review without changing the underlying four-part system or page structure.\n\nApproved changes:\n- third public system stage: `Make action easy` → `Make the next step clear`\n- third system-map support label: `Clear next steps` → `Easy to act on`\n- hero primary CTA: `Talk through the problem` → `Tell us what’s stuck`\n\nCurrent public growth-system model:\n1. **Say the right thing**\n2. **Reach the right people**\n3. **Make the next step clear**\n4. **Follow through**\n\nThe header and final CTA remain `Talk to Digitful`; this decision only changes the hero primary CTA.\n\nImplementation source: `{source}`.\nPreview run: `{preview_run}` — build and deploy successful.\nProduction remains untouched.\n\n'''
    s = s.replace(marker, block + marker, 1)
p.write_text(s)

p = Path('docs/visual-refresh/HANDOFF.md')
s = p.read_text()
s = s.replace('- `If the next step relies on memory, it probably needs a system.`\n', '- `No clear next step`\n', 1)
s = s.replace('- `Make action easy`\n', '- `Make the next step clear`\n', 1)
anchor = 'Header CTA: `Talk to Digitful`.\n'
if 'Hero primary CTA: `Tell us what’s stuck`.' not in s:
    s = s.replace(anchor, anchor + 'Hero primary CTA: `Tell us what’s stuck`.\n', 1)
s = s.replace('- current approved homepage source: `6f4d8bba8b1d76b63c2d9938cecff399553b3700`', f'- current approved homepage source: `{source}`', 1)
s = s.replace('- current homepage preview run `35000985503`: build success, deploy success', f'- current homepage preview run `{preview_run}`: build success, deploy success', 1)
p.write_text(s)

p = Path('docs/visual-refresh/CHANGELOG.md')
s = p.read_text().rstrip() + '\n\n'
if '### Homepage system-step + hero CTA refinement' not in s:
    s += f'''### Homepage system-step + hero CTA refinement\n- **APPROVED — KEEP** as D032.\n- Third public system step changed from `Make action easy` to `Make the next step clear`.\n- Third map support label changed from `Clear next steps` to `Easy to act on`.\n- Hero primary CTA changed from `Talk through the problem` to `Tell us what’s stuck`.\n- Header and final CTA remain `Talk to Digitful`.\n- Source: `{source}`. Preview run `{preview_run}`: build **success**, deploy **success**.\n- Production remains untouched.\n'''
p.write_text(s)

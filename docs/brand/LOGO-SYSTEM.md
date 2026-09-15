# Digitful Logo System

Status: **Production candidate — pending preview KEEP / ADJUST / REJECT.**

This file defines the refined `digitful.` logo family for the visual refresh.

## Core mark

The primary logo is the lowercase wordmark:

**`digitful.`**

The letters use an outlined form derived from **Barlow Condensed ExtraBold / 800**, matching the approved display typography. The terminal period is the brand accent.

Primary colours:
- Ink: `#191A1B`
- Paper / cream: `#F0E7D5`
- Coral terminal dot: `#E95849`

The SVG masters contain outlined vector paths. They do not depend on the webfont loading at runtime.

## Master assets

Primary wordmarks:
- `public/assets/brand/digitful-wordmark-on-light.svg`
- `public/assets/brand/digitful-wordmark-on-dark.svg`

Monochrome wordmarks:
- `public/assets/brand/digitful-wordmark-mono-ink.svg`
- `public/assets/brand/digitful-wordmark-mono-cream.svg`

Standalone small-context mark:
- `public/assets/brand/digitful-mark-on-light.svg`
- `public/assets/brand/digitful-mark-on-dark.svg`

Derived interface assets:
- `public/favicon.svg`
- `public/apple-touch-icon.png`
- `public/android-chrome-192x192.png`
- `public/android-chrome-512x512.png`

The legacy component paths `public/assets/images/logo.svg` and `logo-light.svg` are retained as compatibility copies of the new wordmark.

## Usage

### On light backgrounds
Use the ink wordmark with coral terminal dot.

### On dark backgrounds
Use the cream wordmark with coral terminal dot.

### Monochrome
Use the monochrome masters only when colour reproduction is unavailable or inappropriate.

### Standalone `d.` mark
Use the compact mark only where the full wordmark is genuinely too small, such as favicons, app icons and very small avatars. Normal site navigation should use the full wordmark.

## Clear space

Let **D** equal the diameter of the terminal dot.

- Full wordmark: keep at least `1.5D` clear on all sides.
- Standalone mark: keep at least `1D` clear on all sides.

This is minimum clear space, not a target for layout padding.

## Minimum digital size

- Full wordmark: do not use below **96 CSS px wide**.
- Preferred navigation range: roughly **132–160 CSS px wide**.
- Standalone mark: minimum **16 CSS px**, with **24 px+** preferred when space allows.

If the wordmark becomes difficult to read, switch to the standalone mark rather than compressing or simplifying the letters.

## Do not

- stretch, skew or rotate the logo
- change the coral dot to a random accent colour
- add glow, blur, gradients or soft shadows
- outline the letters with a stroke
- place the primary colour logo on a background that makes either the letters or coral dot hard to distinguish
- use the standalone mark as the default navigation logo
- add a container, badge or pill around the full wordmark unless the surrounding interface requires one for a functional reason

## Tagline lockup

The earlier concept set included a tagline mockup, but no tagline lockup is part of the production v1 logo system because no exact tagline text has been separately approved. If a tagline lockup is needed later, build it from this wordmark rather than modifying the master.

## Source and reproducibility

The production-candidate vectors were generated from the SIL Open Font License version of Barlow Condensed ExtraBold published through Google Fonts and converted to SVG outlines. The temporary generation workflow is removed after the masters and derivatives are created; the committed SVG files are the production source assets.

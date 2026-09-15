from pathlib import Path

# Homepage markup
p = Path('src/pages/index.astro')
s = p.read_text()
old = '''            <article class="home-issue" role="listitem">
              <span class="home-icon-disc home-icon-disc--coral"><HomeIcon name="message" /></span>
              <h3>
                <button
                  type="button"
                  class="home-issue__trigger"
                  aria-expanded="false"
                  aria-controls="home-issue-unclear-reveal"
                  data-issue-trigger="unclear"
                >
                  <span>Unclear message</span>
                  <span class="home-issue__cue" aria-hidden="true">+</span>
                </button>
              </h3>
              <p>People shouldn’t need a committee meeting to understand what you do.</p>
              <div id="home-issue-unclear-reveal" class="home-issue__reveal" hidden>
                <p class="home-issue__punchline">Exactly. Just like this one.</p>
              </div>
            </article>
            <article class="home-issue" role="listitem">
              <span class="home-icon-disc home-icon-disc--mustard"><HomeIcon name="funnel" /></span>
              <h3>
                <button
                  type="button"
                  class="home-issue__trigger"
                  aria-expanded="false"
                  aria-controls="home-issue-leaky-reveal"
                  data-issue-trigger="leaky"
                >
                  <span>Leaky conversion path</span>
                  <span class="home-issue__cue" aria-hidden="true">+</span>
                </button>
              </h3>
              <p>Interest is useful. A clear next step is better.</p>
              <div id="home-issue-leaky-reveal" class="home-issue__reveal home-issue__reveal--leaky" hidden>
                <div class="home-issue__path-demo" aria-hidden="true">
                  <span class="home-issue__path-line"></span>
                  <span class="home-issue__path-dot"></span>
                  <span class="home-issue__path-target"></span>
                </div>
                <p class="home-issue__punchline">It was almost there.</p>
              </div>
            </article>
            <article class="home-issue" role="listitem">
              <span class="home-icon-disc home-icon-disc--teal"><HomeIcon name="clock" /></span>
              <h3>
                <button
                  type="button"
                  class="home-issue__trigger"
                  aria-expanded="false"
                  aria-controls="home-issue-slow-reveal"
                  data-issue-trigger="slow"
                >
                  <span>Slow follow-up</span>
                  <span class="home-issue__cue" aria-hidden="true">+</span>
                </button>
              </h3>
              <p>If the next step relies on memory, it probably needs a system.</p>
              <div id="home-issue-slow-reveal" class="home-issue__reveal" hidden>
                <span class="home-issue__timer" data-followup-timer aria-hidden="true">0.000s</span>
                <p class="home-issue__punchline" data-followup-message hidden>That was only a second.</p>
                <span class="home-issue__aside" data-followup-message hidden>Some leads wait days.</span>
                <span class="home-issue__sr-status" data-followup-status role="status" aria-live="polite"></span>
              </div>
            </article>'''
new = '''            <article class="home-issue" role="listitem">
              <span class="home-icon-disc home-icon-disc--coral"><HomeIcon name="message" /></span>
              <h3>
                <button type="button" class="home-issue__trigger" aria-expanded="false" aria-controls="home-issue-unclear-reveal" data-issue-trigger="unclear">
                  <span>Unclear message</span><span class="home-issue__cue" aria-hidden="true">+</span>
                </button>
              </h3>
              <div id="home-issue-unclear-reveal" class="home-issue__reveal" hidden>
                <p class="home-issue__punchline">Exactly. Just like this one.</p>
              </div>
            </article>
            <article class="home-issue" role="listitem">
              <span class="home-icon-disc home-icon-disc--mustard"><HomeIcon name="funnel" /></span>
              <h3>
                <button type="button" class="home-issue__trigger" aria-expanded="false" aria-controls="home-issue-next-step-reveal" data-issue-trigger="next-step">
                  <span>No clear next step</span><span class="home-issue__cue" aria-hidden="true">+</span>
                </button>
              </h3>
              <div id="home-issue-next-step-reveal" class="home-issue__reveal home-issue__reveal--next-step" hidden>
                <div class="home-issue__path-demo" aria-hidden="true"><span class="home-issue__path-line"></span><span class="home-issue__path-dot"></span><span class="home-issue__path-target"></span></div>
                <p class="home-issue__punchline">And… now what?</p>
              </div>
            </article>
            <article class="home-issue" role="listitem">
              <span class="home-icon-disc home-icon-disc--teal"><HomeIcon name="clock" /></span>
              <h3>
                <button type="button" class="home-issue__trigger" aria-expanded="false" aria-controls="home-issue-slow-reveal" data-issue-trigger="slow">
                  <span>Slow follow-up</span><span class="home-issue__cue" aria-hidden="true">+</span>
                </button>
              </h3>
              <div id="home-issue-slow-reveal" class="home-issue__reveal home-issue__reveal--slow" hidden>
                <span class="home-issue__timer" data-followup-timer aria-hidden="true">0.000s</span>
                <p class="home-issue__punchline" data-followup-message hidden>That was only a second. Some leads wait days.</p>
                <span class="home-issue__sr-status" data-followup-status role="status" aria-live="polite"></span>
              </div>
            </article>'''
if old not in s:
    raise SystemExit('Expected current interaction block not found')
p.write_text(s.replace(old, new, 1))

# Compact styling
Path('src/assets/_homepage-interactions.scss').write_text('''/* Homepage-specific situational interactions: compact, optional and subordinate. */
.home-page .home-issue h3 { margin-bottom: 0; }
.home-page .home-issue__trigger {
  display: inline-flex; width: auto; min-height: 2.75rem; padding: 0; align-items: center; gap: .42rem;
  color: inherit; background: transparent; border: 0; font: inherit; line-height: inherit; letter-spacing: inherit;
  text-align: left; text-decoration-line: underline; text-decoration-thickness: .08em; text-underline-offset: .16em; cursor: pointer;
}
.home-page .home-issue__trigger:hover,
.home-page .home-issue__trigger:focus-visible { text-decoration-thickness: .14em; }
.home-page .home-issue__trigger:focus-visible { outline: 3px solid var(--site-accent); outline-offset: 4px; }
.home-page .home-issue__cue {
  flex: 0 0 auto; color: var(--site-text-muted); font-family: Inter, sans-serif; font-size: .82rem; font-weight: 850; line-height: 1;
  transition: transform 160ms ease;
}
.home-page .home-issue__trigger[aria-expanded='true'] .home-issue__cue { transform: rotate(45deg); }
.home-page .home-issue__reveal { margin-top: .55rem; }
.home-page .home-issue__reveal[hidden] { display: none; }
.home-page .home-issue__punchline { margin: 0; color: var(--site-text); font-size: .9rem; font-weight: 750; line-height: 1.35; }
.home-page .home-issue__reveal--next-step,
.home-page .home-issue__reveal--slow { display: flex; align-items: center; gap: .65rem; flex-wrap: wrap; }
.home-page .home-issue__path-demo { position: relative; width: 5.7rem; height: 1.15rem; flex: 0 0 auto; }
.home-page .home-issue__path-line { position: absolute; top: .52rem; left: 0; width: calc(100% - 1rem); height: 1px; background: var(--site-border); }
.home-page .home-issue__path-target { position: absolute; top: .18rem; right: 0; width: .78rem; height: .78rem; background: var(--site-teal); border: 1px solid var(--site-border); }
.home-page .home-issue__path-dot { position: absolute; top: .26rem; left: 0; width: .64rem; height: .64rem; background: var(--site-accent); border: 1px solid var(--site-border); border-radius: 50%; }
.home-page .home-issue__reveal--next-step.is-running .home-issue__path-dot { animation: home-next-step 650ms cubic-bezier(.32,.72,0,1) forwards; }
.home-page .home-issue__timer {
  display: inline-block; min-width: 6.7ch; padding: .14rem .34rem; flex: 0 0 auto; border: 1px solid var(--site-border-subtle);
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; font-size: .82rem; font-weight: 750;
  font-variant-numeric: tabular-nums; line-height: 1.2; letter-spacing: -.02em;
}
.home-page .home-issue__sr-status { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0; }
@keyframes home-next-step { 0% { left: 0; } 82% { left: 66%; } 100% { left: 70%; } }
@media (prefers-reduced-motion: reduce) {
  .home-page .home-issue__cue { transition: none; }
  .home-page .home-issue__reveal--next-step.is-running .home-issue__path-dot { left: 70%; animation: none; }
}
''')

# Interaction JS
Path('public/scripts/home-issue-interactions.js').write_text('''document.addEventListener('DOMContentLoaded', () => {
  const triggers = document.querySelectorAll('[data-issue-trigger]');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const activeTimers = new Map();
  const setMessageHidden = (reveal, hidden) => reveal.querySelectorAll('[data-followup-message]').forEach((m) => { m.hidden = hidden; });
  const resetSlow = (reveal) => {
    const timer = reveal.querySelector('[data-followup-timer]');
    const status = reveal.querySelector('[data-followup-status]');
    if (timer) timer.textContent = '0.000s';
    setMessageHidden(reveal, true);
    if (status) status.textContent = '';
  };
  const finishSlow = (reveal) => {
    const status = reveal.querySelector('[data-followup-status]');
    setMessageHidden(reveal, false);
    if (status) status.textContent = 'That was only a second. Some leads wait days.';
  };
  const runSlow = (reveal) => {
    const timer = reveal.querySelector('[data-followup-timer]');
    const duration = 1250;
    resetSlow(reveal);
    if (reducedMotion.matches) { if (timer) timer.textContent = '1.250s'; finishSlow(reveal); return; }
    const start = performance.now();
    const tick = (now) => {
      const elapsed = Math.min(now - start, duration);
      if (timer) timer.textContent = `${(elapsed / 1000).toFixed(3)}s`;
      if (elapsed < duration) { const frame = requestAnimationFrame(tick); activeTimers.set(reveal, frame); return; }
      activeTimers.delete(reveal); finishSlow(reveal);
    };
    activeTimers.set(reveal, requestAnimationFrame(tick));
  };
  const runNextStep = (reveal) => { reveal.classList.remove('is-running'); void reveal.offsetWidth; reveal.classList.add('is-running'); };
  triggers.forEach((trigger) => trigger.addEventListener('click', () => {
    const reveal = document.getElementById(trigger.getAttribute('aria-controls') || '');
    if (!reveal) return;
    const willOpen = trigger.getAttribute('aria-expanded') !== 'true';
    trigger.setAttribute('aria-expanded', String(willOpen));
    reveal.hidden = !willOpen;
    const type = trigger.dataset.issueTrigger;
    if (!willOpen) {
      const frame = activeTimers.get(reveal); if (frame) cancelAnimationFrame(frame); activeTimers.delete(reveal);
      reveal.classList.remove('is-running'); if (type === 'slow') resetSlow(reveal); return;
    }
    if (type === 'next-step') runNextStep(reveal);
    if (type === 'slow') runSlow(reveal);
  }));
});
''')

# Copy source of truth
p = Path('docs/brand/HOMEPAGE-COPY.md')
s = p.read_text()
old = '''### Unclear message

People shouldn’t need a committee meeting to understand what you do.

### Leaky conversion path

Interest is useful. A clear next step is better.

### Slow follow-up

If the next step relies on memory, it probably needs a system.
'''
new = '''### Unclear message

No standalone explanation paragraph on the homepage.

Optional interaction reveal: `Exactly. Just like this one.`

### No clear next step

No standalone explanation paragraph on the homepage.

Optional interaction: a small path moves toward a target but stops short, then reveals `And… now what?`

### Slow follow-up

No standalone explanation paragraph on the homepage.

Optional interaction: a compact millisecond timer runs for about 1.25 seconds, then reveals `That was only a second. Some leads wait days.`
'''
if old not in s:
    raise SystemExit('Expected What we fix copy block not found')
p.write_text(s.replace(old, new, 1))

# Decision log
p = Path('docs/visual-refresh/DECISIONS.md')
s = p.read_text()
s = s.replace('## D030 — Situational interaction wit in the homepage problem section\n**Status:** Approved — KEEP', '## D030 — Situational interaction wit in the homepage problem section\n**Status:** Superseded by D031 for presentation details', 1)
marker = '---\n\n## Current pending decisions'
if '## D031 — Compact problem interactions after mobile review' not in s:
    block = '''---\n\n## D031 — Compact problem interactions after mobile review\n**Status:** Approved — KEEP\n\nMobile review showed that the first D030 implementation made the jokes more visually important than the problems. Keep the situational-interaction concept, but compress it substantially.\n\nApproved final problem set:\n- `Unclear message` → `Exactly. Just like this one.`\n- `No clear next step` → small path stops short → `And… now what?`\n- `Slow follow-up` → compact ~1.25s millisecond timer → `That was only a second. Some leads wait days.`\n\nPresentation rules:\n- remove the standalone explanatory paragraphs from these three homepage items\n- each heading must make sense without tapping\n- the reveal is a small reward beneath the heading, not a second mini-section\n- use quiet disclosure cues; no large diamond `+ / ×` controls\n- give the timer the strongest expressive role, but keep it compact\n- preserve semantic buttons, keyboard access, screen-reader final-state announcement and reduced-motion behaviour\n- keep the jokes bespoke; shared disclosure/motion mechanics may later enter the D028 design system\n\nProduction remains untouched.\n\n'''
    s = s.replace(marker, block + marker, 1)
p.write_text(s)

# Handoff
p = Path('docs/visual-refresh/HANDOFF.md')
s = p.read_text()
old = '''Approved interaction-wit principle (D030):
- keep important copy clear and visible
- use interface behaviour itself as the joke, selectively
- `Unclear message` expands to `Exactly. Just like this one.`
- `Leaky conversion path` visually stops short
- `Slow follow-up` runs a ~1.25 second millisecond timer, then reveals `That was only a second.` / `Some leads wait days.`
- preserve semantic disclosure controls, keyboard access, screen-reader clarity and reduced-motion fallbacks
- keep the joke bespoke; only shared accessibility/motion mechanics belong in the design system
'''
new = '''Approved compact interaction-wit pattern (D031; supersedes D030 presentation details):
- remove the standalone explanation paragraphs from the three `Where things usually go wrong` items
- `Unclear message` → `Exactly. Just like this one.`
- `No clear next step` → compact path stops short → `And… now what?`
- `Slow follow-up` → compact ~1.25 second timer → `That was only a second. Some leads wait days.`
- reveals stay visually subordinate to the headings; no second mini-section and no large diamond controls
- preserve semantic disclosure controls, keyboard access, screen-reader clarity and reduced-motion fallbacks
- keep the jokes bespoke; only shared accessibility/motion mechanics belong in the design system
'''
if old in s:
    s = s.replace(old, new, 1)
s = s.replace('- situational homepage interaction wit: **APPROVED — KEEP** (D030)', '- compact situational homepage interaction wit: **APPROVED — KEEP** (D031)', 1)
p.write_text(s)

# Changelog
p = Path('docs/visual-refresh/CHANGELOG.md')
s = p.read_text().rstrip() + '\n\n'
if '### Homepage interaction wit compressed after mobile review' not in s:
    s += '''### Homepage interaction wit compressed after mobile review
- **APPROVED — KEEP** as D031; supersedes D030 presentation details.
- Removed the three standalone explanation paragraphs so the problem labels carry the meaning themselves.
- Renamed `Leaky conversion path` to `No clear next step`.
- Final reveals: `Exactly. Just like this one.` / `And… now what?` / compact timer → `That was only a second. Some leads wait days.`
- Reduced reveal footprint, removed the heavy boxed disclosure cue, shrank the path demo and timer, and kept the timer as the strongest interaction.
- Accessibility and reduced-motion behaviour remain intact.
- Production remains untouched.
'''
p.write_text(s)

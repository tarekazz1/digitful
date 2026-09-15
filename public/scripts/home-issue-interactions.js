document.addEventListener('DOMContentLoaded', () => {
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

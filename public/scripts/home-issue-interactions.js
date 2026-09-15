document.addEventListener('DOMContentLoaded', () => {
  const triggers = document.querySelectorAll('[data-issue-trigger]');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const activeTimers = new Map();

  const resetSlowFollowUp = (reveal) => {
    const timer = reveal.querySelector('[data-followup-timer]');
    const message = reveal.querySelector('[data-followup-message]');
    const status = reveal.querySelector('[data-followup-status]');

    if (timer) timer.textContent = '0.000s';
    if (message) message.hidden = true;
    if (status) status.textContent = '';
  };

  const runSlowFollowUp = (reveal) => {
    const timer = reveal.querySelector('[data-followup-timer]');
    const message = reveal.querySelector('[data-followup-message]');
    const status = reveal.querySelector('[data-followup-status]');
    const duration = 1250;

    resetSlowFollowUp(reveal);

    if (reducedMotion.matches) {
      if (timer) timer.textContent = '1.250s';
      if (message) message.hidden = false;
      if (status) status.textContent = 'That was only a second. Some leads wait days.';
      return;
    }

    const start = performance.now();

    const tick = (now) => {
      const elapsed = Math.min(now - start, duration);
      if (timer) timer.textContent = `${(elapsed / 1000).toFixed(3)}s`;

      if (elapsed < duration) {
        const frame = requestAnimationFrame(tick);
        activeTimers.set(reveal, frame);
        return;
      }

      activeTimers.delete(reveal);
      if (message) message.hidden = false;
      if (status) status.textContent = 'That was only a second. Some leads wait days.';
    };

    const frame = requestAnimationFrame(tick);
    activeTimers.set(reveal, frame);
  };

  const runLeakyPath = (reveal) => {
    reveal.classList.remove('is-running');
    // Restart the CSS demonstration when the panel is reopened.
    void reveal.offsetWidth;
    reveal.classList.add('is-running');
  };

  triggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const revealId = trigger.getAttribute('aria-controls');
      const reveal = revealId ? document.getElementById(revealId) : null;
      if (!reveal) return;

      const willOpen = trigger.getAttribute('aria-expanded') !== 'true';
      trigger.setAttribute('aria-expanded', String(willOpen));
      reveal.hidden = !willOpen;

      const type = trigger.dataset.issueTrigger;

      if (!willOpen) {
        const frame = activeTimers.get(reveal);
        if (frame) cancelAnimationFrame(frame);
        activeTimers.delete(reveal);
        reveal.classList.remove('is-running');
        if (type === 'slow') resetSlowFollowUp(reveal);
        return;
      }

      if (type === 'leaky') runLeakyPath(reveal);
      if (type === 'slow') runSlowFollowUp(reveal);
    });
  });
});

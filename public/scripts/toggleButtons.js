export function initToggleButtons() {
  const toggleButtons = document.querySelectorAll('.toggle-btn');
  const servicesInput = document.getElementById('servicesInput');
  const sourceInput = document.getElementById('sourceInput');
  const snapshotUrlInput = document.getElementById('snapshotUrlInput');
  const snapshotStrategyInput = document.getElementById('snapshotStrategyInput');
  const messageInput = document.getElementById('message');
  const params = new URLSearchParams(window.location.search);
  const serviceLabels = {
    'social-media': 'Social Media',
    seo: 'SEO',
    'paid-ads': 'Paid Ads',
    automation: 'Automation'
  };

  if (toggleButtons.length === 0) {
    return;
  }

  const syncSelectedServices = () => {
    if (!servicesInput) return;
    servicesInput.value = Array.from(toggleButtons)
      .filter((button) => button.classList.contains('selected'))
      .map((button) => button.dataset.service)
      .join(', ');
  };

  toggleButtons.forEach((button) => {
    button.setAttribute('aria-pressed', 'false');
  });

  toggleButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const isPressed = this.classList.toggle('selected');
      this.setAttribute('aria-pressed', String(isPressed));
      syncSelectedServices();
      this.blur();
    });
  });

  const serviceParam = params.get('service');
  if (serviceParam) {
    const targetButton = document.querySelector(`.toggle-btn[data-service="${serviceParam}"]`);
    if (targetButton) {
      targetButton.classList.add('selected');
      targetButton.setAttribute('aria-pressed', 'true');
    }
  }

  const sourceParam = params.get('source');
  const siteUrlParam = params.get('siteUrl');
  const strategyParam = params.get('strategy');

  if (sourceInput && sourceParam) {
    sourceInput.value = sourceParam;
  }

  if (snapshotUrlInput && siteUrlParam) {
    snapshotUrlInput.value = siteUrlParam;
  }

  if (snapshotStrategyInput && strategyParam) {
    snapshotStrategyInput.value = strategyParam;
  }

  if (messageInput && !messageInput.value && siteUrlParam) {
    const serviceLine = serviceParam && serviceLabels[serviceParam] ? `Primary focus: ${serviceLabels[serviceParam]}.` : '';
    const strategyLine = strategyParam ? `Priority view: ${strategyParam}.` : '';

    messageInput.value = [
      `Website to review: ${siteUrlParam}`,
      serviceLine,
      strategyLine,
      'Current bottleneck:',
      'What feels unclear or expensive right now:',
      'What outcome would make this engagement worthwhile:'
    ]
      .filter(Boolean)
      .join('\n');
  }

  syncSelectedServices();
}

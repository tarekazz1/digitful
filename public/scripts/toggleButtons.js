export function initToggleButtons() {
  const toggleButtons = document.querySelectorAll('.toggle-btn');
  if (toggleButtons.length === 0) return;

  const servicesInput = document.getElementById('servicesInput');

  const syncSelectedServices = () => {
    if (!servicesInput) return;
    servicesInput.value = Array.from(toggleButtons)
      .filter((button) => button.classList.contains('selected'))
      .map((button) => button.dataset.service)
      .join(', ');
  };

  toggleButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const isPressed = this.classList.toggle('selected');
      this.setAttribute('aria-pressed', String(isPressed));
      syncSelectedServices();
      this.blur();
    });
  });

  const serviceParam = new URLSearchParams(window.location.search).get('service');
  if (serviceParam) {
    const targetButton = document.querySelector(`.toggle-btn[data-service="${serviceParam}"]`);
    if (targetButton) {
      targetButton.classList.add('selected');
      targetButton.setAttribute('aria-pressed', 'true');
    }
  }

  syncSelectedServices();
}

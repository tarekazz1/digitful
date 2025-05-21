export function initToggleButtons() {
  const toggleButtons = document.querySelectorAll('.toggle-btn');
  if (toggleButtons.length === 0) return;

  toggleButtons.forEach(button => {
    button.addEventListener('click', function() {
      const isPressed = this.classList.toggle('selected');
      this.setAttribute('aria-pressed', isPressed);
      this.blur();
    });
  });

  const urlParams = new URLSearchParams(window.location.search);
  const serviceParam = urlParams.get('service');
  if (serviceParam) {
    const targetButton = document.querySelector(`.toggle-btn[data-service="${serviceParam}"]`);
    if (targetButton) {
      targetButton.classList.add('selected');
      targetButton.setAttribute('aria-pressed', 'true');
    }
  }

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      const helpWithButtons = document.querySelectorAll('fieldset:first-of-type .toggle-btn.selected');
      const helpWithValues = Array.from(helpWithButtons).map(btn => btn.dataset.value).join(', ');

      const goalsButtons = document.querySelectorAll('fieldset:nth-of-type(2) .toggle-btn.selected');
      const goalsValues = Array.from(goalsButtons).map(btn => btn.dataset.value).join(', ');

      document.getElementById('help_with').value = helpWithValues;
      document.getElementById('goals').value = goalsValues;
    });
  }
}

export function initTypewriter() {
  const typewriter = document.getElementById('typewriter');
  if (!typewriter) return;

  const fullText = 'We help teams replace scattered marketing activity with a clearer growth system.';

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    typewriter.textContent = fullText;
    return;
  }

  typewriter.textContent = '';
  let index = 0;
  const typingInterval = setInterval(() => {
    if (index < fullText.length) {
      typewriter.textContent += fullText.charAt(index);
      index += 1;
      return;
    }

    clearInterval(typingInterval);
  }, 42);
}

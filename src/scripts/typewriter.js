export function initTypewriter() {
  const typewriter = document.getElementById('typewriter');
  if (!typewriter) return;

  const fullText = "You've tried the Hacks. We build what works.";

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    typewriter.textContent = fullText;
  } else {
    typewriter.textContent = '';
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        typewriter.textContent += fullText.charAt(index);
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
  }
}

export function initParticles() {
  if (window.particlesJS && !window.matchMedia('(prefers-reduced-motion: reduce)').matches && window.innerWidth > 600) {
    try {
      particlesJS('particles-js', {
        "particles": {
          "number": {
            "value": 80,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "opacity": {
            "value": 0.2,
            "random": true
          },
          "size": {
            "value": 3,
            "random": true
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.1,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 2
          }
        },
        "interactivity": {
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            }
          }
        }
      });
      console.log('Particles.js initialized successfully');
    } catch (error) {
      console.error('Failed to initialize Particles.js:', error);
      const particlesContainer = document.getElementById('particles-js');
      if (particlesContainer) {
        particlesContainer.classList.add('particles-fallback');
      }
    }
  } else if (window.innerWidth <= 600) {
    const particlesContainer = document.getElementById('particles-js');
    if (particlesContainer) {
      particlesContainer.classList.add('particles-fallback');
    }
  }
}

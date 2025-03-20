document.addEventListener('DOMContentLoaded', function() {
  const typewriter = document.getElementById('typewriter');
  
  if (typewriter) {
    const fullText = "Strategies that fit. Growth that lasts.";
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
  
  /* Toggle Button Functionality for Contact Form */
  const toggleButtons = document.querySelectorAll('.toggle-btn');
  toggleButtons.forEach(button => {
    button.addEventListener('click', function() {
      this.classList.toggle('selected');
    });
  });

  /* Initialize Particles.js if available and if reduced motion is not preferred */
  if (window.particlesJS && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
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
  }
});


particlesJS('particles-js', {
  particles: { number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#ff0033" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3, random: true },
    line_linked: { enable: true, distance: 150, color: "#ff0033", opacity: 0.4, width: 1 },
    move: { enable: true, speed: 2 }
  },
  interactivity: { detect_on: "canvas", events: { onhover: { enable: true, mode: "repulse" } } },
  retina_detect: true
});

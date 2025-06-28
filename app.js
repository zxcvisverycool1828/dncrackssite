const title = document.querySelector('.main-title');

if (title) {
    let mouseX = 0;
    let mouseY = 0;

    let glowX = 0;
    let glowY = 0;

    const easing = 0.1;

    title.addEventListener('mousemove', (e) => {
        const rect = title.getBoundingClientRect();
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;
    });

    const animate = () => {
        const dx = mouseX - glowX;
        const dy = mouseY - glowY;

        glowX += dx * easing;
        glowY += dy * easing;

        title.style.setProperty('--mouse-x', `${glowX}px`);
        title.style.setProperty('--mouse-y', `${glowY}px`);

        requestAnimationFrame(animate);
    };

    animate();
}


particlesJS("particles-js", {
    "particles": {
        "number": { "value": 80, "density": { "enable": true, "value_area": 800 }},
        "color": { "value": "#333333" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.5, "random": true },
        "size": { "value": 3, "random": true },
        "line_linked": { "enable": false },
        "move": { "enable": true, "speed": 2, "direction": "none", "out_mode": "out" }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": { "onhover": { "enable": true, "mode": "bubble" }, "onclick": { "enable": true, "mode": "push" }},
        "modes": {
            "bubble": { "distance": 250, "size": 0, "duration": 2, "opacity": 0 },
            "push": { "particles_nb": 4 }
        }
    },
    "retina_detect": true
});

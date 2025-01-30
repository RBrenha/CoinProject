document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("animation-container");

    for (let i = 0; i < 100; i++) {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        container.appendChild(dot);

        gsap.to(dot, {
            x: () => Math.random() * window.innerWidth - window.innerWidth / 2,
            y: () => Math.random() * window.innerHeight - window.innerHeight / 2,
            duration: () => Math.random() * 3 + 2,
            repeat: -1,
            repeatDelay: 0,
            yoyo: true,
            ease: "power1.inOut",
        });
    }
});
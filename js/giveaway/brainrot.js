document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("brainrot-background");

    // Animação de partículas
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

    // Redirecionamento ao enviar o questionário
    const quizForm = document.getElementById("quiz-form");
    quizForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita o envio real do formulário
        window.location.href = "thank-you.html"; // Redireciona para outra página
    });

    // Adiciona textos "brainrot" flutuantes
    const brainrotContainer = document.getElementById("brainrot-elements");
    const texts = [
        "MONEY 💰",
        "REWARDS 🏆",
        "SOLANA 🔥",
        "CASH 💵",
        "QUIZZ 🧠",
        "FREE 🎁",
        "WIN 🚀"
    ];
    
    // Cria múltiplas instâncias de cada texto
    texts.forEach((text, index) => {
        for (let i = 0; i < 5; i++) { // 5 instâncias de cada texto
            const element = document.createElement("div");
            element.classList.add("brainrot-text");
            element.textContent = text;
            element.style.left = `${Math.random() * 100}vw`;
            element.style.top = `${Math.random() * 100}vh`;
            element.style.animationDuration = `${Math.random() * 10 + 5}s`;
            element.style.setProperty("--i", i); // Atraso para cada instância
            brainrotContainer.appendChild(element);
        }
    });
});
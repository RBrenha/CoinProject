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
        window.location.href = "login.html"; // Redireciona para outra página
    });

    // Adiciona textos "brainrot" flutuantes
    const brainrotContainer = document.getElementById("brainrot-elements");
    const texts = ["MONEY 💰", "REWARDS 🏆", "SOLANA 🔥", "CASH 💵", "QUIZZ 🧠", "FREE 🎁", "WIN 🚀"];

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

    // Função para gerar nomes de utilizadores aleatórios
    function generateRandomName() {
        const names = ["Alice", "Bob", "Charlie", "David", "Eva", "Frank", "Grace", "Hank", "Ivy", "Jack"];
        return names[Math.floor(Math.random() * names.length)];
    }

    // Função para gerar ganhos aleatórios em SOL (até 1 SOL)
    function generateRandomEarnings() {
        return (Math.random() * 1).toFixed(4); // 4 casas decimais
    }

    // Preenche a tabela de vencedores com dados aleatórios
    const winnersTable = document.querySelector("#winners-table tbody");
    for (let i = 0; i < 10; i++) { // 10 linhas na tabela
        const row = document.createElement("tr");
        const userCell = document.createElement("td");
        const earningsCell = document.createElement("td");

        userCell.textContent = generateRandomName();
        earningsCell.textContent = generateRandomEarnings();

        row.appendChild(userCell);
        row.appendChild(earningsCell);
        winnersTable.appendChild(row);
    }

    // Atualiza a tabela a cada 5 segundos
    setInterval(() => {
        winnersTable.innerHTML = ""; // Limpa a tabela
        for (let i = 0; i < 10; i++) { // Adiciona novos dados
            const row = document.createElement("tr");
            const userCell = document.createElement("td");
            const earningsCell = document.createElement("td");

            userCell.textContent = generateRandomName();
            earningsCell.textContent = generateRandomEarnings();

            row.appendChild(userCell);
            row.appendChild(earningsCell);
            winnersTable.appendChild(row);
        }
    }, 5000); // Atualiza a cada 5 segundos
});
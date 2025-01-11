    document.addEventListener("DOMContentLoaded", function () {
        const countdownElement = document.getElementById("countdown");

        // Definir a data alvo (7 de fevereiro de 2025)
        const targetDate = new Date(Date.UTC(2025, 1, 7, 0, 0, 0)); // Mês em JavaScript começa no índice 0

        function updateCountdown() {
            const now = new Date();
            const utcNow = new Date(now.getTime() + now.getTimezoneOffset() * 60000);
            const timeRemaining = targetDate - utcNow;

            if (timeRemaining <= 0) {
                countdownElement.innerHTML = "The time has come!";
                return;
            }

            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }

        // Atualiza o countdown a cada segundo
        setInterval(updateCountdown, 1000);
        updateCountdown();
    });
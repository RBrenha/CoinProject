document.addEventListener("DOMContentLoaded", function () {
    const countdownElement = document.getElementById("countdown");
    const buyButton = document.getElementById("buy-button");

    // Definir a data alvo (20 de janeiro de 2025, às 05:00 UTC)
    const targetDate = new Date(Date.UTC(2025, 0, 20, 5, 0, 0)); // Janeiro é mês 0 em JavaScript

    function updateCountdown() {
        const now = new Date();
        const utcNow = new Date(now.getTime() + now.getTimezoneOffset() * 60000);
        const timeRemaining = targetDate - utcNow;

        // Se o tempo restante for menor ou igual a 0
        if (timeRemaining <= 0) {
            countdownElement.innerHTML = "The time has come!";
            buyButton.disabled = false; // Ativa o botão
            buyButton.classList.add("enabled"); // Adiciona classe para estilo ativo
            buyButton.addEventListener("click", () => {
                alert("Now you can buy $SHITDOG!");
            });
            return;
        }

        // Calcula dias, horas, minutos e segundos restantes
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // Atualiza o texto do countdown
        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    // Atualiza o countdown a cada segundo
    setInterval(updateCountdown, 1000);
    updateCountdown();
});

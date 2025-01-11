document.addEventListener("DOMContentLoaded", function () {
    const toggleIcon = document.querySelector(".toggle-icon");
    const navContainer = document.querySelector("#nav-container");
    const buttonsContainer = document.querySelector("#buttons-container");

    if (toggleIcon && navContainer && buttonsContainer) {
        toggleIcon.addEventListener("click", function () {
            // Alterna a classe 'pushed' para a animação do menu
            navContainer.classList.toggle("pushed");

            // Alterna a classe 'show' para exibir ou ocultar os botões
            buttonsContainer.classList.toggle("show");
        });
    } else {
        console.error("Menu ou container de botões não encontrado no DOM");
    }
});

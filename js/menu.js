document.addEventListener("DOMContentLoaded", function () {
    const toggleIcon = document.querySelector(".toggle-icon");
    const navContainer = document.querySelector("#nav-container");
    const buttonsContainer = document.querySelector("#buttons-container");

    if (toggleIcon && navContainer && buttonsContainer) {
        toggleIcon.addEventListener("click", function () {
            // Toggle the class 'pushed' for the hamburger animation
            navContainer.classList.toggle("pushed");

            // Toggle the class 'show' for the buttons
            buttonsContainer.classList.toggle("show");
        });
    } else {
        console.error("Menu or buttons container not found in DOM");
    }
});


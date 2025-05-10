
function displayWelcomeMessage() {
    const welcomeMessage = "Bem-vindo à página inicial!";
    const messageElement = document.getElementById("welcomeMessage");
    if (messageElement) {
        messageElement.textContent = welcomeMessage;
    }
}

function navigateTo(page) {
    window.location.href = page;
}


document.addEventListener("DOMContentLoaded", () => {
    const navButtons = document.querySelectorAll(".nav-button");
    navButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const targetPage = event.target.dataset.page;
            if (targetPage) {
                navigateTo(targetPage);
            }
        });
    });


    displayWelcomeMessage();
});
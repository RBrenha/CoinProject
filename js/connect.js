document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contact").addEventListener("submit", function (event) {
        event.preventDefault(); // Evita o envio padrão do formulário
        
        // Capturar os dados do formulário
        let formData = {
            name: document.querySelector("input[placeholder='Your name']").value,
            email: document.querySelector("input[placeholder='Your Email Address']").value,
            phone: document.querySelector("input[placeholder='Your Phone Number']").value,
            website: document.querySelector("input[placeholder='Your Web Site starts with http://']").value,
            message: document.querySelector("textarea[placeholder='Type your Message Here....']").value
        };

        // URL da API ou servidor que recebe os dados
        const apiUrl = "https://seu-servidor.com/api/salvar-dados"; // Substitua pelo seu endpoint

        // Enviar os dados via Fetch API
        fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            alert("Dados enviados com sucesso!");
            console.log("Resposta do servidor:", data);
        })
        .catch(error => {
            alert("Erro ao enviar os dados.");
            console.error("Erro:", error);
        });
    });
});

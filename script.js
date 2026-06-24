// Aguarda o carregamento do DOM para evitar erros
document.addEventListener("DOMContentLoaded", () => {

    // --- REQUISITO Acessibilidade: Botão de Modo Escuro ---
    const themeToggleBtn = document.getElementById("theme-toggle");
    
    themeToggleBtn.addEventListener("click", () => {
        // Altera a classe no body manipulando o DOM
        document.body.classList.toggle("dark-mode");
    });

    // --- REQUISITO Quiz: Validador de respostas de Anti-Desinformação ---
    const quizForm = document.getElementById("quiz-form");
    const resultBox = document.getElementById("quiz-result");

    quizForm.addEventListener("submit", (event) => {
        // Impede que a página recarregue ao enviar o formulário
        event.preventDefault();

        // Variáveis para guardar as respostas coletadas do DOM
        const answer1 = quizForm.q1.value;
        const answer2 = quizForm.q2.value;

        // Processamento dos pontos antes de exibir na tela
        let score = 0;

        if (answer1 === "certo") {
            score += 1;
        }
        if (answer2 === "certo") {
            score += 1;
        }

        // Manipulação dinâmica do DOM para exibir os resultados
        resultBox.classList.remove("hidden");
        
        if (score === 2) {
            resultBox.style.backgroundColor = "#2ecc71"; // Verde
            resultBox.textContent = `Excelente! Você acertou ${score}/2 perguntas. Você sabe como evitar Fake News de IA!`;
        } else {
            resultBox.style.backgroundColor = "#e74c3c"; // Vermelho
            resultBox.textContent = `Atenção! Você acertou ${score}/2 perguntas. Revise as dicas acima para não ser enganado por Deepfakes!`;
        }
    });

});

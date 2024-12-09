// Função para calcular o valor mensal com base na idade e no valor base
function calcularValorMensal() {
    const valorBase = parseFloat(document.getElementById("valorBase").value);
    const idade = parseInt(document.getElementById("idade").value);
    const resultado = document.getElementById("valorMensal");

    // Validação dos campos
    if (isNaN(valorBase) || isNaN(idade) || valorBase <= 0 || idade <= 0) {
        resultado.textContent = "Por favor, insira valores válidos.";
        resultado.style.color = "red";
        return;
    }

    // Definição do percentual com base na idade
    let percentual;
    if (idade < 19) {
        percentual = 100;
    } else if (idade < 29) {
        percentual = 150;
    } else if (idade < 39) {
        percentual = 225;
    } else if (idade < 49) {
        percentual = 240;
    } else if (idade < 59) {
        percentual = 350;
    } else {
        percentual = 600;
    }

    // Cálculo do valor mensal
    const valorMensal = (percentual / 100) * valorBase;

    // Exibindo o resultado
    resultado.textContent = `O valor mensal do plano é: R$ ${valorMensal.toFixed(2)}`;
    resultado.style.color = "green";
}

// Associar a função ao botão
document.getElementById("calcular").addEventListener("click", calcularValorMensal);

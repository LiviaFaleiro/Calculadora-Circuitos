function corrente(){

    document.querySelector('.corrente').style.display="block"
    document.querySelector('.main').style.display="none"

}
let totalResistance = 0;

function criarInputs() {
    // Solicita ao usuário a quantidade de resistências
    const numResistencias = prompt("Quantas resistências você deseja inserir?");
    document.getElementById("legenda").style.display="none"
    
    // Converte a entrada para um número inteiro
    const quantidade = parseInt(numResistencias);
    
    // Obtém o contêiner onde os inputs serão adicionados
    const inputContainer = document.getElementById("inputContainer");
    const result = document.getElementById("result");
    const voltageContainer = document.getElementById("voltageContainer");
    const somaResistor = document.getElementById("somaResistor");
    
    // Limpa o contêiner e o resultado antes de adicionar novos inputs
    inputContainer.innerHTML = '';
    result.innerHTML = '';
    voltageContainer.style.display = 'none';

    // Verifica se a quantidade é um número válido
    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Por favor, insira um número válido de resistências.");
        return;
    }

    // Função para calcular e exibir a soma das resistências
    function updateSum() {
        const inputs = document.querySelectorAll(".resistor-input");
        let sum = 0;
        
        inputs.forEach(input => {
            const value = parseFloat(input.value);
            if (!isNaN(value)) {
                sum += value;
            }
        });

        totalResistance = sum;
        somaResistor.innerHTML = `A soma das resistências é: ${sum} Ω`;

        // Exibe o campo para entrada da tensão após calcular a soma das resistências
        voltageContainer.style.display = 'block';

    }

    // Cria a quantidade fornecida de inputs
    for (let i = 0; i < quantidade; i++) {
        const input = document.createElement("input");
        input.type = "number";
        input.placeholder = `Resistor ${i + 1} (Ω)`;
        input.classList.add("resistor-input");
        input.addEventListener('input', updateSum);
        inputContainer.appendChild(input);
        inputContainer.appendChild(document.createElement("br"));
    }

    // Adiciona um evento ao campo de entrada da tensão para calcular a corrente
    const voltageInput = document.getElementById("voltageInput");
    voltageInput.addEventListener('input', calculateCurrent);
    document.getElementById("tensaoTexto").style.display="block"
}


function calculateCurrent() {
    const voltageInput = document.getElementById("voltageInput");
    const voltage = parseFloat(voltageInput.value);

    const result = document.getElementById("result");

    // Verifica se a tensão é um número válido
    if (isNaN(voltage)) {
        result.innerHTML = `A soma das resistências é: ${totalResistance} Ω. Por favor, insira um valor válido de tensão.`;
        return;
    }
    // Calcula a corrente usando a Lei de Ohm
    const current = voltage / totalResistance;
    result.innerHTML = `A soma das resistências é: ${totalResistance} Ω.<br>A corrente é: ${current.toFixed(2)} A<br>com uma tensão de ${voltage} V.`;
    document.getElementById("CalculaNov").style.display="block"
}

function novamente(){
document.getElementById("legenda").style.display="block"
}
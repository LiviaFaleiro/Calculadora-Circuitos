function corrente(){

    document.querySelector('.corrente').style.display="block"
    document.querySelector('.main').style.display="none"

}
let totalResistance = 0;

function criarInputs() {
    
    const numResistencias = prompt("Quantas resistências você deseja inserir?");
    document.getElementById("legenda").style.display="none"
    
    
    const quantidade = parseInt(numResistencias);
    
   
    const inputContainer = document.getElementById("inputContainer");
    const result = document.getElementById("result");
    const voltageContainer = document.getElementById("voltageContainer");
    const somaResistor = document.getElementById("somaResistor");
    
  
    inputContainer.innerHTML = '';
    result.innerHTML = '';
    voltageContainer.style.display = 'none';


    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Por favor, insira um número válido de resistências.");
        return;
    }

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
        somaResistor.innerHTML = `A resistência equivalente é: ${sum} Ω`;

        voltageContainer.style.display = 'block';

    }

    for (let i = 0; i < quantidade; i++) { //quantidade de inputs
        const input = document.createElement("input");
        input.type = "number";
        input.placeholder = `Resistor ${i + 1} (Ω)`;
        input.classList.add("resistor-input");
        input.addEventListener('input', updateSum);
        inputContainer.appendChild(input);
        inputContainer.appendChild(document.createElement("br"));
    }

    const voltageInput = document.getElementById("voltageInput");
    voltageInput.addEventListener('input', calcularCorrente);
    document.getElementById("tensaoTexto").style.display="block"
}

function calcularCorrente() {
    const voltageInput = document.getElementById("voltageInput");
    const voltage = parseFloat(voltageInput.value);

    const result = document.getElementById("result");

    if (isNaN(voltage)) {
        result.innerHTML = `A resistência equivalente é ${totalResistance} Ω. Por favor, insira um valor válido de tensão.`;
        return;
    }
    const current = voltage / totalResistance;
    result.innerHTML = `A corrente é: ${current.toFixed(2)}A<br>A resistência equivalente é: ${totalResistance} Ω.<br>A tensão é ${voltage} V.`;
    document.getElementById("CalculaNov").style.display="block"
}

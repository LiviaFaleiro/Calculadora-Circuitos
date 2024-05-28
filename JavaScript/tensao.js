document.addEventListener('DOMContentLoaded', () => {
const inputCaixa = document.getElementById("inputCaixa");
const resultado = document.getElementById("resultado");
const voltagem = document.getElementById("voltagem");
const soma = document.getElementById("soma");
const ohmInput = document.getElementById("ohmInput");
var correnteResultado = document.getElementById("correnteResultado");
var tensaoTotal = 0
var res = 0;
var current = 0
correnteResultado = 0

window.tensao = function(){
    document.querySelector('.tensao').style.display = "block";
    document.querySelector('.main').style.display = "none";
}

ohmInput.addEventListener("input", () => { //addEventListener adiciona uma função de callback que será chamada sempre que o evento 'input' ocorrer no elemento ohmInput.
    //O evento 'input' ocorre sempre que o valor do campo de entrada muda.
    
    current = parseFloat(ohmInput.value); /*ohmInput.value obtém o valor digitado como uma string.
    parseFloat converte string para um número float.*/
    
    if (!isNaN(current)) {
        correnteResultado.innerHTML = `A corrente é de ${current} A.`;
    } else {
        correnteResultado.innerHTML = `Por favor, insira um valor válido.`;
    }
});

window.criarInput = function(){
    
    const numResistencias = prompt("Quantas resistências você deseja inserir?");
    const quantidade = parseInt(numResistencias);
    document.getElementById("LegendaResistor").style.display="none"
    inputCaixa.innerHTML = '';
    resultado.innerHTML = '';
    
    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Por favor, insira um número válido de resistências.");
        return;
    }
    
    function updateResistor() {
        const inputs = document.querySelectorAll(".resistor-input");
        inputs.forEach(input => {
            const value = parseFloat(input.value);
            if (!isNaN(value)) {
                res += value;
            }
        });
    
    }
    
    for (let i = 0; i < quantidade; i++) {
        const input = document.createElement("input");
        input.type = "number";
        input.placeholder = `Resistor ${i + 1} (Ω)`;
        input.classList.add("resistor-input");
        input.addEventListener('input', updateResistor);
        inputCaixa.appendChild(input);
        inputCaixa.appendChild(document.createElement("br"));
    }

} //fecha criarinput

window.calcularTensao = function(){
    var voltage = parseFloat(voltageInput.value);
    var tensao = res*current;
    resultado.innerHTML = `A tensão é ${tensao} V.<br>A corrente é: ${current}A<br>A resistência equivalente é: ${res} Ω.<br>`;
    document.getElementById("CalculaNov").style.display="block"
}
})
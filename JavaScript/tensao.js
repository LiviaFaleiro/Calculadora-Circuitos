function tensao() {
    document.querySelector('.tensao').style.display = "block";
    document.querySelector('.main').style.display = "none";
}
const ohmInput = document.getElementById("ohmInput");
const correnteResultado = document.getElementById("correnteResultado");

ohmInput.addEventListener("input", () => { //addEventListener adiciona uma função de callback que será chamada sempre que o evento 'input' ocorrer no elemento ohmInput.
                                          //O evento 'input' ocorre sempre que o valor do campo de entrada muda.

    const current = parseFloat(ohmInput.value); /*ohmInput.value obtém o valor digitado como uma string.
                                                 parseFloat converte string para um número float.*/
    
    if (!isNaN(current)) {
        correnteResultado.innerHTML = `A corrente é de ${current} A.`;
    } else {
        correnteResultado.innerHTML = `Por favor, insira um valor válido.`;
    }
});

function criarInput(){

    const numResistencias = prompt("Quantas resistências você deseja inserir?");
    document.getElementById("LegendaResistor").style.display="none"
    const quantidade = parseInt(numResistencias);

    const inputCaixa = document.getElementById("inputCaixa");
    const resultado = document.querySelector('.resultado');
    const voltagem = document.getElementById("voltagem");
    const soma = document.getElementById("soma");

    inputCaixa.innerHTML = '';
    resultado.innerHTML = '';
    voltagem.style.display = 'none';
    
    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Por favor, insira um número válido de resistências.");
        return;
    }

    function updateResistor() {
        const inputs = document.querySelectorAll(".resistor-input");
        let res = 0;
        
        inputs.forEach(input => {
            const value = parseFloat(input.value);
            if (!isNaN(value)) {
                res += value;
            }
        });

        resistenciaTotal = res;
        soma.innerHTML = `A soma das resistências é: ${res} Ω`;
        voltagem.style.display = 'block';
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

    }
    
function calcularTensao(){
    const voltagem = document.getElementById("voltagem");
    const voltage = parseFloat(voltageInput.value);

    const resultado = document.getElementById("resultado");

    const tensao = resistenciaTotal*correnteResultado;
    resultado.innerHTML = `A tensão é ${tensao} V.<br>A corrente é: ${correnteResultado.toFixed(2)}A<br>A resistência equivalente é: ${resistenciaTotal} Ω.<br>`;
    document.getElementById("CalculaNov").style.display="block"
}
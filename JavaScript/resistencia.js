    function resistencia(){
        document.querySelector('.resistencia').style.display = "block";
        document.querySelector('.main').style.display = "none";
    }

//input para tensao = tensaoInput
//input para corrente = correnteInput
// classe de resultado = resultado

const tensaoInput = document.getElementById("tensaoInput");
const correnteInput = document.getElementById("correnteInput");
const resultado = document.getElementById("resultadoResistencia")
const tensaoRes = document.getElementById("tensaoRes");
const correnteRes = document.getElementById("correnteRes");

const updateTensao = () => {
    tensaoTotal = parseFloat(tensaoInput.value);
    tensaoRes.innerHTML = `A tensão é de ${tensaoTotal}`;
}

const updateCorrente = () => {
    correnteTotal = parseFloat(correnteInput.value);
    correnteRes.innerHTML = `A corrente é de ${correnteTotal}`;
}

const calculateResistencia = () => {
    const resistencia = tensaoTotal / correnteTotal;
    resultado.innerHTML = `A resistência é de ${resistencia} Ω<br>A tensão é: ${tensaoTotal} v<br>A corrente é: ${correnteTotal} A`;
}

tensaoInput.addEventListener("input", updateTensao);
correnteInput.addEventListener("input", updateCorrente);
document.getElementById("calcularResistencia").addEventListener("click", calculateResistencia);


function calcularResistencia(){
    
    var resistencia = tensaoTotal/correnteTotal
    resultado.innerHTML = `A resistência é de ${resistencia} Ω<br>A tensão é: ${tensaoTotal} v<br>A corrente é: ${correnteTotal} A`
}
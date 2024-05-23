function tensao(){

    document.querySelector('.tensao').style.display="block"
    document.querySelector('.main').style.display="none"
    document.querySelector('.corrente').style.display="none"
    document.querySelector('.resistencia').style.display="none"
    
}
const ohmInput = document.getElementById("ohmInput");
const correnteResultado = document.getElementById("correnteResultado");

ohmInput.addEventListener("input", () => {
    const current = parseFloat(ohmInput.value);
    
    if (!isNaN(current)) {
        correnteResultado.innerHTML = `A corrente é de ${current} A.`;
    } else {
        correnteResultado.innerHTML = `Por favor, insira um valor válido.`;
    }
});
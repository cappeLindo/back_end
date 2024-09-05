import entradaDeDados from 'readline-sync';

//atividade 08
function imc(peso, altura) {
    let resultado = peso / (altura * altura);
    return `O IMC da pessoa que tem ${altura.toFixed(2)} de altura e pesa ${peso} é de ${resultado.toFixed(2)}`;
}

let pe = entradaDeDados.questionInt("Digite seu peso: ")
let alt = entradaDeDados.questionFloat("Digite sua altura em metros: ")

console.log(imc(pe, alt))
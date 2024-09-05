import entradaDeDados from 'readline-sync';

//atividade 05
function desconto (valor, Porcentagem){
    let resultado = valor * (Porcentagem/100)
    console.log(`O desconto de ${Porcentagem}% para o valor inicial de R$ ${valor.toFixed(2)} é de R$ ${resultado.toFixed(2)}`)
}

let numero = entradaDeDados.questionInt("Digite qualquer numero: ")

let porcentagem = entradaDeDados.questionInt("Digite a porcentagem do produto: ")

desconto(numero, porcentagem)
import entradaDeDados from 'readline-sync';


//atividade 03
function somita(n1, n2) {
    return n1 + n2;
}

let num1 = entradaDeDados.questionInt('digite seu primeiro numero: ');
let num2 = entradaDeDados.questionInt('digite seu segundo numero: ');
let resultado = somita(num1, num2);
console.log(`A soma de ${num1} + ${num2} é igual a: ${resultado}`);

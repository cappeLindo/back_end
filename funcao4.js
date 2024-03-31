import entradaDeDados from 'readline-sync';

//atividade 04
function porce(num, p) {
    return num * ( p / 100);

}
let numero = entradaDeDados.questionInt('digite seu numero: ');
let porcentagem = entradaDeDados.questionFloat('digite a porcentagem do numero: ');
let resu = porce(numero, porcentagem);
console.log(`${porcentagem} porcento de ${numero} é igual a: ${resu}`);
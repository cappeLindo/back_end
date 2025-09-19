import entradaDeDados from 'readline-sync';

//atividade 02
function inparPar(seila) {
    if (seila % 2 == 0) {
        console.log('numero par!')   
    }
    if (seila % 2 !==0) {
        console.log('numero impar!')
    
    }
}
let ppo = entradaDeDados.questionInt('digite um numero inteiro: ');
console.log(inparPar(ppo))
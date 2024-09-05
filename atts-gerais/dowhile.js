import entradaDeDados from 'readline-sync';

let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let palpite;
let tentativa = 0; 

do {
    palpite = entradaDeDados.questionInt('digite um numero de 1 a 100: ');

    if (palpite < numeroAleatorio) {
        console.log('numero maior');
    }
    else if ( palpite > numeroAleatorio) {
        console.log('numero menor');
    }

    tentativa++;
} while(palpite !== numeroAleatorio);
    console.log(`parabens! voce acertou o numero secreto ${numeroAleatorio} em ${tentativa} tentativas`)
    

import input from 'readline-sync'; 

let num = input.questionInt('Digite um numero para ser feito seu fatorial: '); 

let f = 1;
let c = num;

while (c > 1) {
    f = f * c;
    c--;
}


console.log(`O resultado de fatorial de ${num} é ${f}`); 


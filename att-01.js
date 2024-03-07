import entradaDeDados from 'readline-sync';

//atividade 01//
let dia = entradaDeDados.questionInt('digite o dia em numero:')
switch (dia) { 
    case 1:
        console.log("segunda-feira");
        break;
    case 2:
        console.log("terça-feira");
        break;
    case 3:
        console.log("quarta-feira");
        break;
    case 4:
        console.log("quinta-feira");
        break;
    case 5:
        console.log("sexta-feira");
        break;
    case 6:
        console.log("sábado");
        break;
    case 7:
    console.log("domingo");
        break;
    default:
        console.log('esse numero não existe!')
        break;
}


//atividade 02//
let mes = entradaDeDados.questionInt('digite o mes em numero:');
switch (mes) { 
    case 1:
        console.log("janeiro");
        break;
    case 2:
        console.log("fevereiro");
        break;
    case 3:
        console.log("março");
        break;
    case 4:
        console.log("abril");
        break;
    case 5:
        console.log("maio");
        break;
    case 6:
        console.log("junho");
        break;
    case 7:
    console.log("julho");
        break;
    case 8:
        console.log("agosto");
        break;
    case 9:
        console.log("setembro");
        break;
    case 10: 
        console.log("outubro");
        break;
    case 11:
        console.log("novembro");
        break;
    case 12:
        console.log("dezembro");
        break;
    default:
        console.log("nao existe nenhum mes catalogado com esse numero!!!")
        break;
}


//atividade 03//
let operacao = entradaDeDados.question('digite a operacao que voce deseja fazer: ')
let x = entradaDeDados.questionFloat('digite o primeiro numero: ')
let y = entradaDeDados.questionFloat('digite o segundo numero: ')

switch (operacao) {
    case "soma":
        console.log(`a soma de x + y e de: ${x + y}.`);
        break;
    case "subtracao":
        console.log(`a subtracao de x - y e de: ${x- y}.`);
        break;
    case "multiplicacao":
        console.log(`a multiplicacao de x por y e de: ${x * y}.`);
        break;
    case "divisao":
        console.log(`a divisao de x por y e de: ${x/y}.`);
        break;
    default:
        console.log('nao existe essa opreracao!')
        break;
}

//atividade 04//

let bonificacao = entradaDeDados.question('digite sua categoria de bonificacao: ')
let salario = entradaDeDados.questionFloat('digite seu salario atual: R$')

switch (bonificacao) {
    case "a":
        console.log(`a bonidicação A tem 5% do seu salário, seu novo salario sera de: ${ salario * 1.05}`);
        break;
    case "b":
        console.log(`a bonidicação B tem 10% do seu salário, seu novo salario sera de: ${ salario * 1.10}`);
        break;
    case "c":
        console.log(`a bonidicação C tem 15% do seu salário, seu novo salario sera de: ${ salario * 1.15}`);
        break; 
    case "d":
        console.log(`a bonidicação D tem 20% do seu salário, seu novo salario sera de: ${ salario * 1.20}`);
        break; 
    default:
        console.log('bonificacao nao encontrada!!')
        break;


}
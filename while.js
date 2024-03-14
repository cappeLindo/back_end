import entradaDeDados from 'readline-sync';

// Exercício While 01
let numeroEntradaTabuada =  entradaDeDados.questionInt("Insira um numero para a tabuada: ");

let contTabuada = 1;
while (contTabuada <= 10) {
    console.log(`${numeroEntradaTabuada} X ${contTabuada} = ${numeroEntradaTabuada * contTabuada}`);
    contTabuada ++;
}

//exercício While 02
let nAlunos = entradaDeDados.questionInt("Quantos alunos tem a turma: ");
let cont = 1;
let mediaturma = 0
while (nAlunos >= cont) {
    console.log(`Agora digite a nota do ${cont}º aluno:`);
    let nb1 = entradaDeDados.questionInt("Digite a nota do primeiro bimestre: ");
    let nb2 = entradaDeDados.questionInt("Digite a nota do segundo bimestre: ");
    let nb3 = entradaDeDados.questionInt("Digite a nota do terceiro bimestre: ");
    let nb4 = entradaDeDados.questionInt("Digite a nota do quarto bimestre: ");
    let media = (nb1+nb2+nb3+nb4)/4
    console.log(`A media do ${cont}º aluno é de ${media.toFixed(2)}`);
    cont++;
    mediaturma += media 
    
}
console.log(`A média da turma é de ${(mediaturma/nAlunos).toFixed(2)}`)
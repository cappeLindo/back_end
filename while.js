import input from 'readline-sync'

function menu() { 
    console.log('')
    console.log('[1] multiplicacao.');
    console.log('[2] Soma.'); 
    console.log('[3] Divisao. '); 
    console.log('')
}

function multiplicacao(n1, n2) {
    n1 = input.questionFloat('Digite o primeiro valor: ');
    n2 = input.questionFloat('Digite o segundo valor: ');
    console.log(`a multiplicacao de ${n1} x ${n2} = ${(n1 * n2).toFixed(2)}`)
}

function soma(n1, n2) {
    n1 = input.questionFloat('Digite o primeiro valor: ');
    n2 = input.questionFloat('Digite o segundo valor: ');
    console.log(`a soma de ${n1} + ${n2} = ${(n1 + n2).toFixed(2)}`)
}

function divisao(n1, n2) { 
    n1 = input.questionFloat('Digite o primeiro valor: ');
    n2 = input.questionFloat('Digite o segundo valor: ');
    console.log(`a divisao de ${n1} / ${n2} = ${(n1 / n2).toFixed(2)}`)
}

function continuar() { 
    let cont = true; 

    while (cont) { 
        menu();
        let opcao = input.questionInt('Digite uma das opcoes de sua escolha: ');

        switch (opcao) {
            case 1:
                console.log(multiplicacao())
                break;
            case 2:
                console.log(soma());
                break;
            case 3: 
                console.log(divisao());
                break;
            default:
                console.log('Opcão inexistente!')
                break;
        }

        let soun = input.question('Deseja continuar? [S/N]: ').toUpperCase()
        if (soun == 'S') { 
            console.log(opcao)
        } else if (soun == 'N') { 
            cont = false;
            console.log('Até mais :)')
            break;
        }
    }
}

continuar();
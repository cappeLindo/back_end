import input from 'readline-sync'

function exibirMenu() { 
    console.log('Escolha uma das opções: ');
    console.log('[1] calcular area do Retangulo.')
    console.log('[2] calcular area do Triangulo.')
    console.log('[3] calcular area do Circulo.')
    console.log('[4] Sair.')
}

function AreaRetangulo(largura, altura, area) { 
    largura = input.questionFloat('Digite a largura do retangulo: '); 
    altura = input.questionFloat('Digite a altura do retangulo: '); 
    area = largura * altura;
    console.log(`O calculo de largura X altura do retangulo resultara na area de: ${(area).toFixed(2)}`);
}

function AreaTriangulo(base, altura, area) {
    base = input.questionFloat('Digite a base do triangulo: ');
    altura = input.questionFloat('Digite a altura do triangulo: '); 
    area = (base * altura) / 2; 
    console.log(`O calculo de base X altura do triangulo resultara na area de: ${(area).toFixed(2)}`);
}

function AreaCirculo(raio, area) {
    raio = input.questionFloat('Digite o raio do circulo: '); 
    area = 3.1415 * raio ** 2; 
    console.log(`O calculo do raio do circulo resultara na area de: ${(area).toFixed(2)}`);
}

function continuar() { 
    let cont = true; 
    
    while (cont) { 
        exibirMenu(); 
        let opcao = input.questionInt('Digite uma das opcoes de sua escolha: ')

        switch (opcao) {
            case 1:
                console.log(AreaRetangulo());
                break;
            case 2: 
                console.log(AreaTriangulo());
                break; 
            case 3: 
                console.log(AreaCirculo());
                break; 
            case 4: 
                console.log('Ate a proxima :)'); 
                cont = false; 
                break; 
            default:
                console.log('Opcao invalida!')
                break;
        }
    }
}

continuar(); 
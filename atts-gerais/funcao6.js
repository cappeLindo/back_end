import entradaDeDados from 'readline-sync';

//atividade 06
function area(raio) {
    let resultado = 3.14 * (raio * raio)
    return `a area de um circulo como o raio de ${raio} e de ${resultado}`
}

let seila = entradaDeDados.questionInt('digite o raio do circulo que sera calculado a sua area:')
console.log(area(seila))


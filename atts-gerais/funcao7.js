import entradaDeDados from 'readline-sync';

//atividadade 07
function converter(celsius) {
    let  fahrenheit = (celsius * 9/5) + 32
    return console.log(`${celsius}°C = ${fahrenheit}°F`)
}

let quente = entradaDeDados.questionInt('digite a temperatura em graus celcius:')
converter(quente)
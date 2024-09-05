function CelciusParaFahrenheit(numero) { 
    let calcular = ((numero * 9/5) + 32);
    return calcular.toFixed(2);
}

function FahrenheitParaCelcius(numero) { 
    let calcular = ((numero - 32) * 5/9);
    return calcular.toFixed(2);
}


function escolher(escolha) {
    if(escolha == 'c') { 
        console.log(CelciusParaFahrenheit)
    } else if(escolha == 'f') { 
        console.log(FahrenheitParaCelcius)
    }
    return escolha;
};

exports.CelciusParaFahrenheit = CelciusParaFahrenheit; 
exports.FahrenheitParaCelcius = FahrenheitParaCelcius;
exports.escolher = escolher;
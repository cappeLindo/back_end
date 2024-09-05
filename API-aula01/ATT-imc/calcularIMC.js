function efetuarCalculoIMC(peso, altura) { 
    let imc = peso / (altura * altura);
    return imc.toFixed(2); 
}

function retornarStatusIMC(imc) { 
    let status; 

    if(imc <18.5) { 
        status = 'Abaixo do peso'
    } else if(imc >= 18.5 && imc < 24.9) { 
        status = 'Peso normal'
    } else if(imc >= 24.9 && imc < 30) { 
        status = 'Acima do peso'
    } else { 
        status = 'Obeso morbito'
    }

    return status; 
    
}

function validarParametro(parametro) { 
    if(isNaN(parametro))
    { 
        return false;
    }
    else { 
        return true;
    }
}


exports.efetuarCalculoIMC = efetuarCalculoIMC;
exports.retornarStatusIMC = retornarStatusIMC;
exports.validarParametro = validarParametro;
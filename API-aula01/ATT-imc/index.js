const express = require('express');
const app = express();

const calcularIMC = require('./calcularIMC');

app.get('/', (req, res) => { 
    let peso = req.query.peso; 
    let altura = req.query.altura; 


    if(calcularIMC.validarParametro(req.query.peso) && 
    calcularIMC.validarParametro(req.query.altura))
    {
        let imc = calcularIMC.efetuarCalculoIMC(peso, altura);
        let status = calcularIMC.retornarStatusIMC(imc);
        
        let Json = {imc: imc, status: status};

        res.json(Json);
    }
    else { 
        res.status(400).json({'Erro':'Peso ou altura inválida!'});
    }
});
app.listen(8080 , () => { 
    let data = new Date();
    console.log('Servidor iniciado em:' +data);
});

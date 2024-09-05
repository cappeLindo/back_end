const express = require('express');
const app = express();

const temperatura = require('./temperatura');

app.get('/', (req, res) => { 
   let numeros = req.query.numero;
   let escolher = req.query.escolher;

   if( temperatura.escolher(req.query.escolher))
   
   {
        let calc = temperatura.CelciusParaFahrenheit(numeros);
        let escolha = temperatura.escolher(escolher)
        
        
        let Json = {calc: numeros, escolher: escolha};

        res.json(Json);

   }
   
});
app.listen(8080 , () => { 
    let data = new Date();
    console.log('Servidor iniciado em:' +data);
});

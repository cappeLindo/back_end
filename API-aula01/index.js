const express = require('express');
const app = express();

let data = new Date();


app.get('/', (req, res) => {
    let mensagem = ({nome: 'vitor', idade: 16, sobre: 'Eu sou Vitor e gosto de comer'});
    res.json(mensagem);
});

app.listen(8080, () => {
    console.log('Servidor node iniciado em: ' + data);
});
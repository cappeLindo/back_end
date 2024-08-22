let dados = require('./dados');

function retornarMensagemDoDia(dia) {
    return dados.frases[Math.floor(Math.random() * (dia) + 1)];
};
exports.retornarMensagemDoDia = retornarMensagemDoDia;

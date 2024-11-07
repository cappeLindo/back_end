import express from "express";
import { historicoInflacao } from "./servicos/servico.js";

const app = express();
let data = new Date();

app.get('/historicoIPCA', (req, res) => {
    const ipca = req.query.historico;
    const resultado = buscarIPCA(historicoInflacao); 
    
    if (ipca == anoIPCA) { 
        res.json(resultado);
    } else { 
        res.status(404).send({"erro": "Nenhuma UF encontrada"});
    }

});


app.listen(8080, () => {
    console.log('Servidor node iniciado em: ' + data);
});
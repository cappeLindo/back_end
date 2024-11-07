import express from "express";
import {buscarIPCA} from "./servicos/servico";

const app = express();
let data = new Date();

app.get('/ufs', (req, res) => {
    const ipca = req.query.historico;
    const resultado = buscarIPCA; 
    
    if (ipca == anoIPCA) { 
        res.json(resultado);
    } else { 
        res.status(404).send({"erro": "Nenhuma UF encontrada"});
    }

});


app.listen(8080, () => {
    console.log('Servidor node iniciado em: ' + data);
});
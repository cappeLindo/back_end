import express from 'express';
import pool from './servicos/conexao.js';
import { retornacampeonatos, retornacampeonatosID, retornacampeonatosAno, retornacampeonatosCampeao } from './servicos/retornaCampeonatos_servico.js';

const app = express(); 

app.get('/campeonatos', async (req, res) => { 
    let campeonatos;

    const ano = req.query.ano; 
    const time = req.query.time;

    if (typeof ano === 'undefined' && typeof time === 'undefined') { 
        campeonatos = await retornacampeonatos();
    } else if (typeof ano !== 'undefined') { 
        campeonatos = await retornacampeonatosAno(ano);
    } else if (typeof time !== 'undefined') {
        campeonatos = await retornacampeonatosCampeao(time);
    }

    if (campeonatos.length > 0 ) { 
        res.json(campeonatos);
    } else { 
        res.status(404).json({ mensagem:"Nennhum campeonato encontrado :("})
    }
})

app.get('/campeonatos/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const campeonato = await retornacampeonatosID(id);
    if(campeonato.length > 0) { 
        res.json(campeonato);
    } else if (campeonato.length > 20) { 
        res.status(404).json({ mensagem: "nenhum ID de time encontrado :("})
    }
    else { 
        res.status(404).json({ mensagem: "nenhum campeonato encontrado :("});
    }
})




app.listen(9000, async () => {
    const data = new Date(); 
    console.log('Servidor NODE iniciado em http://localhost:9000 e no horário de: '+ data);

    const conexao = await pool.getConnection();

    console.log(conexao.threadId); 

    conexao.release();
})
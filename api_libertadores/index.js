import express from 'express';
import pool from './servicos/conexao.js';
import { retornacampeonatos, retornacampeonatosID, retornacampeonatosAno } from './servicos/retornaCampeonatos_servico.js';

const app = express(); 

app.get('/campeonatos', async (req, res) => { 
    let campeonatos;

    const ano = req.query.ano; 

    if(typeof ano === 'unfined') { 
        campeonatos = await retornacampeonatos();
    } else { 
        campeonatos = await retornacampeonatosAno(parseInt(ano))
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
    } else { 
        res.status(404).json({ mensagem: "nenhum campeonato encontrado :("});
    }
})


app.listen(9000, async () => {
    const data = new Date(); 
    console.log('Servidor NODE iniciado em: '+ data);

    const conexao = await pool.getConnection();

    console.log(conexao.threadId); 

    conexao.release();
})
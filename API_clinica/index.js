import express from 'express';
import {retornarMedicos} from './servico/retornarMedicos_servico.js';
import pool from './servico/conexao.js'
import cors from 'cors';

const app = express();
app.use(cors());


app.get('/medicos', async (req, res) => { 

    const todos_medicos = await retornarMedicos();
    res.json(todos_medicos);
})



app.listen(3000, async () => {
    const data = new Date(); 
    console.log('Servidor NODE iniciado no horário de: '+ data);

    const conexao = await pool.getConnection();

    console.log(conexao.threadId); 

    conexao.release();
})
import express from 'express';
import { MostrarTodosMedicos, MostrarMedicoEspecifico, MostrarMedicoEspecialidade } from './servico/retornarMedicos_servico.js';
import pool from './servico/conexao.js';
import cors from 'cors'
const app = express();

app.use(cors())

app.get('/medicos', async (req, res) => {
    const nome = req.query.nome;
    const especialidade = req.query.especialidade;
    let resposta;
    if (typeof nome === 'undefined' && typeof especialidade === 'undefined') {
        resposta = await MostrarTodosMedicos()
    } else if (typeof nome !== 'undefined') {
        resposta = await MostrarMedicoEspecifico(nome)
    } else if (typeof especialidade !== 'undefined') {
        resposta = await MostrarMedicoEspecialidade(especialidade)
    }
    if (resposta.length > 0) {
        res.json(resposta)
    } else {
        res.status(404).json({ mensagem: "Nenhum médico encontrado" })
    }
})


app.listen(9000, async () => {
    const data = new Date()
    console.log("Servidor iniciado em http://localhost:9000/medicos e no horário de: " + data);

    const conexao = await pool.getConnection();
    console.log(conexao.threadId);
    conexao.release();

})
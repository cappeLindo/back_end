import pool from './conexao.js';

async function exportarQuery(conexao, query) { 
    const conexao_clinica = await conexao.query(query);
    let resposta = conexao_clinica[0];
    return resposta
}

async function retornarMedicos() { 
    const conexao = await pool.getConnection();
    const query = `SELECT m.id, m.nome, m.telefone, m.email, e.especialidade FROM medicos m JOIN especialidades e ON m.especialidade = e.id ORDER BY m.nome ASC`;
    let resposta_medicos = await pool.query(query);
    let todos_medicos = resposta_medicos[0]
    conexao.release();
    return todos_medicos
}



export {
    retornarMedicos
}
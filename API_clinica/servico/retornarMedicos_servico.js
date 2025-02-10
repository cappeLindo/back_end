import pool from "./conexao.js";

async function exportQuery(conexao, query, params = []) {
    let [resposta] = await conexao.query(query, params);
    return resposta;
}

async function MostrarTodosMedicos() {
    const conexao = await pool.getConnection();
    const query = `SELECT m.id, m.nome, m.telefone, m.email, e.especialidade 
                   FROM medicos m 
                   JOIN especialidades e ON m.especialidade = e.id 
                   ORDER BY m.nome ASC`;
    let resposta = await exportQuery(conexao, query); 
    conexao.release();
    return resposta;
}

async function MostrarMedicoEspecifico(nome_medico) {
    const listaNomes = await MostrarTodosMedicos(); 
    const resposta = listaNomes.filter(medico => 
        medico.nome.toLowerCase().includes(nome_medico.toLowerCase())
    );
    return resposta;
}

async function MostrarMedicoEspecialidade(especialidade_medico) {
    const conexao = await pool.getConnection();
    const query = `SELECT m.id, m.nome, m.telefone, m.email, e.especialidade 
                   FROM medicos m 
                   JOIN especialidades e ON m.especialidade = e.id 
                   WHERE e.especialidade = ?`;
    let resposta = await exportQuery(conexao, query, [especialidade_medico]); 
    conexao.release();
    return resposta;
}

export {
    MostrarTodosMedicos,
    MostrarMedicoEspecifico,
    MostrarMedicoEspecialidade
};

import pool from "./conexao.js";

export async function deletaCameponato(id) { 
    const conexao = await pool.getConnection(); //cri a conexão e atribui a variavel conexão
    const query = 'DELETE FROM campeonatos WHERE id = ?'; //aqui está pedindo a requisição para a esclusão de um ID
    const [resposta] = await conexao.execute(query, [id]); //estou puxando e criando a resposta e pedindo o puxando o ID que será excluido
    console.log(resposta);
    conexao.release();
    return resposta;
}



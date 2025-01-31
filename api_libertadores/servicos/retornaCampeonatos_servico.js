import pool from './conexao.js';

async function retornacampeonatos() { 
    const conexao = await pool.getConnection();
    const capeonatos_tb = await conexao.query('SELECT id, campeao, vice, ano FROM campeonatos'); 
    const campeonatos = capeonatos_tb[0];
    conexao.release();
    return campeonatos
}

async function retornacampeonatosID(id) { 
    const conexao = await pool.getConnection();
    const capeonatos_tb = await conexao.query(
        'SELECT id, campeao, vice, ano FROM campeonatos WHERE id = ' + id
    );
    const campeonatos = capeonatos_tb[0];
    conexao.release();
    return campeonatos;
}


async function retornacampeonatosAno(ano) { 
    const conexao = await pool.getConnection();
    const capeonatos_tb = await conexao.query(
        'SELECT id, campeao, vice, ano FROM campeonatos WHERE ano = ' + ano
        );
        const campeonatos = capeonatos_tb[0];
        conexao.release();
        return campeonatos;
    }
    
    
    async function retornacampeonatosCampeao(time) { 
        const conexao = await pool.getConnection();
        
        const capeonatos_tb = await conexao.query(
            'SELECT id, campeao, vice, ano FROM campeonatos WHERE campeao = "' + time + '"'
            );
            const campeonatos = capeonatos_tb[0];
            conexao.release();
            return campeonatos;
    }


export {retornacampeonatos, retornacampeonatosID, retornacampeonatosAno, retornacampeonatosCampeao}
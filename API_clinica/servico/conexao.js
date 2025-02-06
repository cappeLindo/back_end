import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'localhost', 
    user: 'clinica_user',
    password: 'capelleto2007',
    database: 'clinica',
});

export default pool; 
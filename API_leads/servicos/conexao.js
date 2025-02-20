import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'capelleto2007',  
  database: 'leads', 
});

export default pool;

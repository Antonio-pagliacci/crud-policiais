require('dotenv').config({ path: __dirname + '/../../.env' });
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306
});

console.log('usuario' , process.env.DB_USER);

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar no MySQL:', err);
    return;
  }
  console.log('Conexão com o banco de dados!');
});

module.exports = connection;

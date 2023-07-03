const mysql2 = require('mysql2'); 

const conexao = mysql2.createConnection({
    host:'localhost',
    port: '3306',
    user: 'root',
    password: 'admin',
    database: 'bdsitedoces',
    define: { 
        timestamps: true,
        underscored: true
    }

})
conexao.connect();

module.exports = conexao;


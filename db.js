const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Aman@9110992095', // apna MySQL password daalo agar hai
    database: 'library'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('✅ Connected to MySQL');
});

module.exports = connection;


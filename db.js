const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'MySQL80',
    user: 'root',
    password: 'paws_1234safety',
    database: 'pawssafety'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log('Connected to the database.');
});

module.exports = connection;

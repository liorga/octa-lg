const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',  
    password: 'A@gla12@3',
    database: 'express'
});

connection.connect((err) => {
    if (err) {
        console.log('Error connecting to Db');
        console.log(err);
        return;
    }
    console.log('Connection established');
});

module.exports = connection;
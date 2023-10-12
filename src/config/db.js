const mysql = require('mysql');
require('dotenv').config();
const { DB_HOST, DB_USER, DB_PASS, DB_NAME } = process.env;

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    database: 'chat',
    user: 'igdadmin',
    password: '$User#Conec.2022$'
});

module.exports = connection;
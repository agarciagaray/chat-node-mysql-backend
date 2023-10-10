const mysql = require('mysql');
require('dotenv').config();
const { DB_HOST, DB_USER, DB_PASS, DB_NAME } = process.env;

const connection = mysql.createConnection({
    host: DB_HOST || 'localhost',
    database: DB_USER || 'chat',
    username: DB_USER || 'igdamin',
    password: DB_PASS || '$User#Conec.2022$',
});

module.exports = connection;
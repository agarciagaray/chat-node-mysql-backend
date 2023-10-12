const express = require('express');
const cors = require('cors');

const dbConnection = require('./config/db');

const { API_VERSION, API_NAME } = process.env;

const app = express();

const http = require('http');
const httpServer = http.createServer(app);

const io = require('socket.io')(httpServer, {
    cors: {
        origin: 'http://localhost:4200'
    }
});

// Importar rutas
const userRoutes = require('./routers/user');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('src/uploads'));
app.use(cors());

app.use((req, res, next) => {
    req.io = io;
    req.con = dbConnection;
    next();
});


// Exponer rutas
// app.get('/', (req, res) => {
//     res.status(200).send('Ok');
// })
const basePath = `/${API_NAME}/${API_VERSION}`;
app.use(basePath, userRoutes);

io.on('connect', (socket) => {
    socket.on('disconect', () => {
        console.log('Usuario no conectado');
    })
});

module.exports = httpServer;
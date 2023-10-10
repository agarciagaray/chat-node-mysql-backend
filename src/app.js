const express = require('express');
const cors = require('cors');

const dbConnection = require('./config/db');

const { API_VERSION, API_NAME } = process.env;

const app = express();


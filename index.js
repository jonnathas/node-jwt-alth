const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const bearerToken = require('express-bearer-token');

const authRouter = require('./src/routes/authRouter.js');

dotenv.config()

const app = express();

app.use(bearerToken());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.SERVER_PORT ? process.env.SERVER_PORT : 80;

app.use('/auth', authRouter)

app.listen(port,() => {
    console.log('servidor iniciado');
});

module.exports = app;


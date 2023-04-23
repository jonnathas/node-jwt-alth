import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config()

import authRouter from './src/routes/authRouter.js';


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.SERVER_PORT ? process.env.SERVER_PORT : 80;

app.use('/', authRouter)

app.listen(port,() => {
    console.log('servidor iniciado');
});

export default authRouter;


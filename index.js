import express from 'express';

import dotenv from 'dotenv'
dotenv.config()

const app = express();
const port = process.env.SERVER_PORT ? process.env.SERVER_PORT : 80;

import authRouter from './src/routes/authRouter.js';

app.use('/', authRouter)

app.listen(port,() => {
    console.log('servidor iniciado');
});

export default authRouter;


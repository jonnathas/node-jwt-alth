import express from 'express';
const authRouter = express.Router();

import authController from '../controllers/authController.js';

authRouter.get('/register', authController.register);

export default authRouter;
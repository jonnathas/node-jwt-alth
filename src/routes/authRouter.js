import express from 'express';
const authRouter = express.Router();

import authController from '../controllers/authController.js';

authRouter.post('/register', authController.register);

export default authRouter;
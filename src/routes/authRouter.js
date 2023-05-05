const express = require('express');
const authRouter = express.Router();

const authController = require('../controllers/authController.js');

authRouter.post('/register', authController.register);
authRouter.post('/login', authController.login);
authRouter.post('/logout', authController.logout);
authRouter.get('/me', authController.me);
authRouter.put('/update', authController.update);




module.exports = authRouter;
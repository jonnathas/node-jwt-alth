import user from './db/models/user.js'
import dotenv from 'dotenv'
dotenv.config()

let userCreated = new user({
    name:'jonnathas',
    password: '123',
    email: 'jonnathas@quality.com'
});

console.log(userCreated);
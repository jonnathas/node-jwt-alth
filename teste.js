import User from './src/models/user.js'
import dotenv from 'dotenv'
dotenv.config()

let user = new User({
    name:'jonnathas',
    password: '123',
    email: 'jonnathas@quality.com'
});

user.register();

console.log(user.id)


//console.log(userCreated);
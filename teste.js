import User from './src/models/user.js'
import dotenv from 'dotenv'
dotenv.config()



let user = User.create({
    name:'jonnathas',
    password: '123',
    email: 'jonnathas@quality.com'
});

console.log(user.id)


//console.log(userCreated);
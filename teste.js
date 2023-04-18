const User = require('./src/models/user.js')
const dotenv = require('dotenv')
dotenv.config()

let user = new User({
    name:'jonnathas',
    password: '123',
    email: 'jonnathas@quality.com'
});

user.register();

console.log(user.id)


//console.log(userCreated);
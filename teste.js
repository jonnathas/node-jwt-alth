const User = require('./src/models/User.js')
const dotenv = require('dotenv')
dotenv.config()

let user = new User

user.create({
    name:'jonnathas',
    password: '123',
    email: 'jonnathas@quality.com'
}).then((userCreated)=>{

    
})



//console.log(userCreated);
const userClass = require('./db/models/user')
const dotenv = require('dotenv')
dotenv.config()

let user = new userClass({
    name:'jonnathas',
    password: '123',
    email: 'jonnathas@quality.com'
});

user.register();


//console.log(userCreated);
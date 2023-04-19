import Userfrom './src/models/user.js')
import dotenvfrom 'dotenv')
dotenv.config()

let user = new User({
    name:'jonnathas',
    password: '123',
    email: 'jonnathas@quality.com'
});

user.register();

console.log(user.id)


//console.log(userCreated);
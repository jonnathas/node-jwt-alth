const knex = require('knex');
const bcrypt = require('bcrypt');
const knexConfig = require('../../knexfile.js');

class User {
    
    async create(data){

        const salt = parseInt(process.env.HASH_SALT, 10);

        const hashadPassword = bcrypt.hashSync(data.password, salt)
        data.password = hashadPassword;

        
        let result = await knex(knexConfig[process.env.NODE_ENV])('users').insert(data)            
        
        if(!result){
            throw new Error("User not created.")
        }
        
        console.log(result)

        return result;
    }
}

module.exports = User ;
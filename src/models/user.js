const knex = require('knex');
const bcrypt = require('bcrypt');
const knexConfig = require('../../knexfile.js');

class User {

    
    
    constructor({id,password,email,name}){
        this.id = id;
        this.email = email;
        this.name = name;
        this.password = password;
        this.table = 'users';
    }
    
    register(then_callback,catch_callback){

        const name = this.name;
        const password = this.password;

        const salt = parseInt(process.env.HASH_SALT, 10);

        let result = bcrypt.hash(this.password, salt, (error, hash) =>{

            let data = { name: this.name, password: '2', email: this.email}

            return knex(knexConfig[process.env.NODE_ENV])('users').insert(data)
                .then(then_callback)
                .catch(catch_callback)
        });
    
        console.log(result)

        return result;
    }
}

module.exports = User ;
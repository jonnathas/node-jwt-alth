const knex = require('knex');
const bcrypt = require('bcrypt');

class User {

    table = 'users';
    
    constructor({id,password,email,name}){
        this.id = id;
        this.email = email;
        this.name = name;
    }
    
    register(){

        const name = this.name;
        const password = this.password;

        bcrypt.hash(password, 10, (error, hash) =>{

            console.log(knex);

            const rows = knex.insert(this.table).insert({name: this.name, password: password});
            
            console.log('rows');

            if(!rows.legth === 0){
                return null
            }
    
            return new User(rows[0]);
        });

    }
}

module.exports = User ;
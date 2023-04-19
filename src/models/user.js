import knex from 'knex'
import bcrypt from 'bcrypt';
import knexConfig from '../../knexfile.alternative.js';

class User {

    
    
    constructor({id,password,email,name}){
        this.id = id;
        this.email = email;
        this.name = name;
        this.password = password;
        this.table = 'users';
    }
    
    register(){

        const name = this.name;
        const password = this.password;

        const salt = parseInt(process.env.HASH_SALT, 10);
        let hash;

        let result = bcrypt.hash(this.password, salt, (error, hash_created) =>{
            hash = hash_created;
        });

        console.log(hash)

        this.password = hash;
        let data = { name: this.name, password: hash, email: this.email}

        knex(knexConfig[process.env.NODE_ENV])('users').insert(data)
    
        

        return result;
    }
}

export default User;
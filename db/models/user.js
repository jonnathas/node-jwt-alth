import knex from 'knex';
import bcrypt from 'bcrypt';

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

            const rows = knex.insert(this.table).insert({name, password});
            
            if(rows.legth === 0){
                return null
            }
    
            return new User(rows[0]);
        });

    }
}

export default User;
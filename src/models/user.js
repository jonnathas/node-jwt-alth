const knexConfig = require('../../knexfile.js');
const knex = require('knex')(knexConfig[process.env.NODE_ENV]);
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class User {
    
    async create(data){

        data = await this.makeHash(data);

        console.log(data)

        let user_id = await knex('users').insert(data)           
        
        if(!user_id){
            throw new Error("User not created.")
        }
        
        //console.log(user_id)

        return user_id;
    }

    async findAll(data = {}){
        
        const user = await knex('users').where(data);

        return user;

    }

    async first(data = {}){
        
        const user = await knex('users').first().where(data);

        return user;

    }

    async login(data){

        data = await this.makeHash(data);
        
        return this.first(data);

    }

    async makeHash(data){

        const salt = parseInt(process.env.HASH_SALT, 10);

        return await bcrypt.hash(data.password, salt, (error,hash)=> {

            console.error(error)

            if(error){
                throw new Error("Error when try make hash.")
            }
            return hash;
        })
    }
}

module.exports = User ;
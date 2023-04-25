const knexConfig = require('../../knexfile.js');
const knex = require('knex')(knexConfig[process.env.NODE_ENV]);
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const dotenv = require('dotenv')
dotenv.config()

class User {
    
    async create(data){

        data.password = await this.makeHash(data);

        //console.log(data)

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

        return new Promise(async function(resolve,reject){

            const user = await knex('users').first().where(data)
                
            console.log(user)

            if(user){
                resulve(user)
            } else {
                reject("Error when to try find the user.")
            }
        })

        data.password = await this.makeHash(data);
        
        return this.first(data);

    }

    async makeHash(data){

        const salt = parseInt(process.env.HASH_SALT, 10);

        console.log(data.password, salt)

        let  hash

        await bcrypt.hash(data.password, salt)
            .then((hash_returned)=>{
                hash = hash_returned;
            }).catch((error)=>{
                throw new Error("Error when to try make hash.")
            })

        return hash
    }
}

module.exports = User ;
const knexConfig = require('../../knexfile.js');
const knex = require('knex')(knexConfig[process.env.NODE_ENV]);
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Model = require('./model.js')
const Token = require('./token.js')

const dotenv = require('dotenv')
dotenv.config()

class User extends Model{

    constructor(){

        super();

        this.table = 'users'
    }
    
    async create(data){

        data.password = await this.makeHash(data);

        data.created_at = knex.fn.now();

        const user_id = await knex(this.table).insert(data)           
        
        if(!user_id){

            throw new Error("User not created.")
        }

        return user_id;
    }

    

    async login(data){

        data.password = await this.makeHash(data)

        const table = this.table;

        return new Promise(async function(resolve,reject){

            const user = await knex(table)
                .select('*')
                .first('id')
                .where(data)
                .whereNull('deleted_at')

            if(user){
                resolve(user)
            } else {
                reject("Error when to try find the user.")
            }
        })

    }

    async makeHash(data){

        const salt = parseInt(process.env.HASH_SALT, 10);

        const hash = btoa(data.password) // atob     

        return hash
    }
}

module.exports = User ;
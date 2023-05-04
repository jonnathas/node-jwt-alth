const knexConfig = require('../../knexfile.js');
const knex = require('knex')(knexConfig[process.env.NODE_ENV]);
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Model = require('./model.js')
const User = require('./user.js')

const dotenv = require('dotenv')
dotenv.config()

class Token extends Model{

    async destroyByToken(token){

        return await knex('tokens')
            .first()
            .where({ token: token})
            .del()
    }

    async getUserByToken(token){
        const tokenRegister = await knex('tokens')
            .select('*')
            .first('id')
            .where({ token: token})
        
        const user = new User();
        
        return await user.getWhere({ id : tokenRegister.user_id })
    }
}

module.exports = Token ;
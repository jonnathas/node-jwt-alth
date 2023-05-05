const knexConfig = require('../../knexfile.js');
const knex = require('knex')(knexConfig[process.env.NODE_ENV]);

const dotenv = require('dotenv')
dotenv.config()

class Model {

    

    async create(data){

        //console.log(data)

        data.created_at = knex.fn.now();

        const id = await knex(this.table).insert(data)           
        
        if(!id){

            throw new Error('Item (table: ' + this.table+ ') not created.')
        }
        
        //console.log(id)

        return id;
    }

    async destroy(id) {
        
        return await knex(this.table)
            .where('id', id)
            .update({ 
                deleted_at: knex.fn.now() 
            });
    }

    async getWhere(data = {}){
        
        return await knex(this.table)
            .where(data)
            .whereNull('deleted_at');
    }

    async update(id, data = {}){

        return await knex(this.table)
            .where({id: id})
            .update(data)
    }
}

module.exports = Model ;
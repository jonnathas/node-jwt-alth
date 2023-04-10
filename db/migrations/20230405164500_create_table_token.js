/**
 * @param { const("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {

    knex.schema.createTable('tokens',function(table){

        table.bigIncrements('id').primary();
        table.bigInteger('user_id');
        table.text('token');
    })
  
};

/**
 * @param { const("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {

    knex.dropTable('tokens');
  
};

/**
 * @param { const("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {

    return knex.schema.createTable('tokens',function(table){

        table.increments();
        table.timestamp("created_at").default(null);
        table.timestamp("deleted_at").default(null);

        table.bigInteger('user_id');
        table.text('token');
    })
  
};

/**
 * @param { const("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {

    return knex.schema.dropTable('tokens');
  
};

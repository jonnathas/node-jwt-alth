/**
 * @param { const("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {

    return knex.schema.createTable('users',function(table){

        table.bigIncrements('id').primary();
        table.string('name').notNullable();
        table.string('e_mail').notNullable();
        table.string('password').notNullable();
    })
  
};

/**
 * @param { const("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {

    return knex.schema.dropTable('users');
  
};

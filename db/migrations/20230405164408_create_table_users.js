/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {

    return knex.schema.createTable('users',function(table){

        table.increments();
        table.string('name').nullable().default(null);
        table.string('email').nullable().default(null);
        table.string('password').nullable().default(null);
    })
  
};

/**
 * @param { const("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {

    return knex.schema.dropTable('users');
  
};

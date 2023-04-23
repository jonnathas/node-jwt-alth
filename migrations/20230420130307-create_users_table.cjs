'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {

  async up (queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      CREATE TABLE users (
        id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(255),
        password VARCHAR(255)
      );
    `);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
  
};

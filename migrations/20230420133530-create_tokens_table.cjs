'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      
    await queryInterface.sequelize.query(`
      CREATE TABLE tokens(
        id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
        token TEXT,
        user_id BIGINT UNSIGNED
      );
    `);

    await queryInterface.sequelize.query(`
    ALTER TABLE tokens ADD CONSTRAINT fk_user_id
      FOREIGN KEY (user_id)
      REFERENCES users(id);
  `);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('tokens');
  }
};

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        name: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.FLOAT
        },
        discount: {
            type: Sequelize.FLOAT
        },
        image: {
            type: Sequelize.TEXT
        },
        description: {
            type: Sequelize.TEXT
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE
        },
        storeId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'stores',
                key: 'id',
            }
        },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
        }
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};

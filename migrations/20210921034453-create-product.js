'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      brand_name: {
        type: Sequelize.STRING
      },
      product_name: {
        type: Sequelize.STRING
      },
      size: {
        type: Sequelize.STRING
      },
      bpom_number: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      how_to_use: {
        type: Sequelize.TEXT
      },
      ingredients_list: {
        type: Sequelize.TEXT
      },
      image_URL: {
        type: Sequelize.STRING
      },
      marketplace_URL: {
        type: Sequelize.STRING
      },
      social_media_URL: {
        type: Sequelize.STRING
      },
      CategoryId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Products');
  }
};
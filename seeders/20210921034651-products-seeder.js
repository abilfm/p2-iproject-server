'use strict';
const products = require("./products.json")
products.forEach(product => {
  product.createdAt = new Date()
  product.updatedAt = new Date()
});
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Products', products, {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  }
};

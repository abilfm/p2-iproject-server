'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories', [
      { 
        name: "Cleanser",
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      { 
        name: "Toner",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { 
        name: "Serum",
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      { 
        name: "Moisturizer",
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      { 
        name: "Sunscreen",
        createdAt: new Date(),
        updatedAt: new Date() 
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};

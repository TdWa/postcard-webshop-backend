"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "productCategories",
      [
        {
          productId: 1,
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 2,
          categoryId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 3,
          categoryId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 4,
          categoryId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 5,
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("productCategories", null, {});
  },
};

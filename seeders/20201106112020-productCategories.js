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
        {
          productId: 6,
          categoryId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 7,
          categoryId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 8,
          categoryId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 9,
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 10,
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 11,
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 12,
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 14,
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 15,
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 16,
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 17,
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 23,
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 24,
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 26,
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 27,
          categoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 28,
          categoryId: 2,
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

"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "orderItems",
      [
        {
          orderId: 1,
          productId: 1,
          amount: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          orderId: 1,
          productId: 2,
          amount: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          orderId: 1,
          productId: 14,
          amount: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          orderId: 1,
          productId: 21,
          amount: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          orderId: 1,
          productId: 32,
          amount: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("orderItems", null, {});
  },
};

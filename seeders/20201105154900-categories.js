"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "categories",
      [
        {
          name: "christmas",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "wishes",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "birthday",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "apologies",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "baby",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "wedding",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("categories", null, {});
  },
};

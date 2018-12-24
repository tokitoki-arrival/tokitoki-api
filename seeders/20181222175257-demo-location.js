"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Locations",
      [
        {
          location: "Yogyakarta",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          location: "Canggu",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          location: "Uluwatu",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          location: "Nusa Penida",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          location: "Nusa Dua",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Locations", null, {});
  }
};

"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Properties",
      [
        {
          propertyName: "Hotel Jogja",
          locationId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          propertyName: "Hotel Jateng",
          locationId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          propertyName: "Hotel Canggu",
          locationId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          propertyName: "Hotel Badung",
          locationId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          propertyName: "Hotel Ulu",
          locationId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          propertyName: "Hotel Watu",
          locationId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          propertyName: "Hotel Nusa Penida",
          locationId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          propertyName: "Hotel Nusa Lembongan",
          locationId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          propertyName: "Hotel San Regis",
          locationId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          propertyName: "Hotel Mulya",
          locationId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],

      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Properties", null, {});
  }
};

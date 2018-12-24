"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Units",
      [
        {
          type: "Deluxe Room",
          propertyId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type: "Studio Room",
          propertyId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type: "Standard Room",
          propertyId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type: "Deluxe Room",
          propertyId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type: "Private Room",
          propertyId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type: "Deluxe Room",
          propertyId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type: "One Bed Room",
          propertyId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type: "Deluxe Room",
          propertyId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type: "Extra Deluxe Room",
          propertyId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type: "Family",
          propertyId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type: "Deluxe Room",
          propertyId: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type: "Studio Room",
          propertyId: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type: "Deluxe Room",
          propertyId: 7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type: "Private Room",
          propertyId: 7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type: "Deluxe Room",
          propertyId: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type: "Standard Room",
          propertyId: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type: "Deluxe Room",
          propertyId: 9,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type: "Studio Room",
          propertyId: 9,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type: "Family",
          propertyId: 10,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type: "Extra Deluxe Room",
          propertyId: 10,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Units", null, {});
  }
};

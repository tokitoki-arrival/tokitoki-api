"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Rooms",
      [
        {
          unitId: 1,
          roomNo: "101",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          unitId: 1,
          roomNo: "102",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          unitId: 2,
          roomNo: "103",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          unitId: 2,
          roomNo: "104",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          unitId: 3,
          roomNo: "105",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          unitId: 3,
          roomNo: "106",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          unitId: 4,
          roomNo: "107",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          unitId: 4,
          roomNo: "108",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          unitId: 5,
          roomNo: "109",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          unitId: 5,
          roomNo: "110",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          unitId: 6,
          roomNo: "111",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          unitId: 6,
          roomNo: "112",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          unitId: 7,
          roomNo: "113",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          unitId: 7,
          roomNo: "114",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          unitId: 8,
          roomNo: "115",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          unitId: 8,
          roomNo: "116",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          unitId: 9,
          roomNo: "117",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          unitId: 9,
          roomNo: "118",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          unitId: 10,
          roomNo: "119",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          unitId: 10,
          roomNo: "120",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          unitId: 11,
          roomNo: "121",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          unitId: 11,
          roomNo: "122",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          unitId: 12,
          roomNo: "123",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          unitId: 12,
          roomNo: "124",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          unitId: 13,
          roomNo: "125",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          unitId: 13,
          roomNo: "126",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          unitId: 14,
          roomNo: "127",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          unitId: 14,
          roomNo: "128",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          unitId: 15,
          roomNo: "129",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          unitId: 15,
          roomNo: "130",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          unitId: 16,
          roomNo: "131",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          unitId: 16,
          roomNo: "132",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          unitId: 17,
          roomNo: "133",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          unitId: 17,
          roomNo: "134",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          unitId: 18,
          roomNo: "135",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          unitId: 18,
          roomNo: "136",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          unitId: 19,
          roomNo: "137",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          unitId: 19,
          roomNo: "138",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          unitId: 20,
          roomNo: "139",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          unitId: 20,
          roomNo: "140",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Rooms", null, {});
  }
};

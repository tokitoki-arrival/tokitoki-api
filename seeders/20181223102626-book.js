"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Bookings",
      [
        {
          roomId: 1,
          guestName: "John Doe 1",
          checkIn: new Date(2019, 1, 1),
          checkOut: new Date(2019, 1, 3),
          status: "checked in",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          roomId: 2,
          guestName: "John Doe 2",
          checkIn: new Date(2019, 1, 1),
          checkOut: new Date(2019, 1, 3),
          status: "not checked in",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          roomId: 3,
          guestName: "John Doe 3",
          checkIn: new Date(2019, 1, 1),
          checkOut: new Date(2019, 1, 3),
          status: "checked in",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          roomId: 4,
          guestName: "John Doe 4",
          checkIn: new Date(2019, 1, 1),
          checkOut: new Date(2019, 1, 3),
          status: "not checked in",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          roomId: 5,
          guestName: "John Doe 5",
          checkIn: new Date(2019, 1, 1),
          checkOut: new Date(2019, 1, 3),
          status: "checked in",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          roomId: 6,
          guestName: "John Doe 6",
          checkIn: new Date(2019, 1, 1),
          checkOut: new Date(2019, 1, 3),
          status: "not checked in",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          roomId: 7,
          guestName: "John Doe 7 ",
          checkIn: new Date(2019, 1, 1),
          checkOut: new Date(2019, 1, 3),
          status: "checked in",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          roomId: 8,
          guestName: "John Doe 8",
          checkIn: new Date(2019, 1, 1),
          checkOut: new Date(2019, 1, 3),
          status: "not checked in",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          roomId: 9,
          guestName: "John Doe 9",
          checkIn: new Date(2019, 1, 1),
          checkOut: new Date(2019, 1, 3),
          status: "checked in",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          roomId: 10,
          guestName: "John Doe 10",
          checkIn: new Date(2019, 1, 1),
          checkOut: new Date(2019, 1, 3),
          status: "not checked in",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          roomId: 11,
          guestName: "John Doe 11",
          checkIn: new Date(2019, 1, 1),
          checkOut: new Date(2019, 1, 3),
          status: "checked in",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          roomId: 12,
          guestName: "John Doe 12",
          checkIn: new Date(2019, 1, 1),
          checkOut: new Date(2019, 1, 3),
          status: "not checked in",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          roomId: 13,
          guestName: "John Doe 13",
          checkIn: new Date(2019, 1, 1),
          checkOut: new Date(2019, 1, 3),
          status: "checked in",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          roomId: 14,
          guestName: "John Doe 14",
          checkIn: new Date(2019, 1, 1),
          checkOut: new Date(2019, 1, 3),
          status: "not checked in",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          roomId: 15,
          guestName: "John Doe 15",
          checkIn: new Date(2019, 1, 1),
          checkOut: new Date(2019, 1, 3),
          status: "checked in",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          roomId: 16,
          guestName: "John Doe 16",
          checkIn: new Date(2019, 1, 1),
          checkOut: new Date(2019, 1, 3),
          status: "not checked in",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          roomId: 17,
          guestName: "John Doe 17",
          checkIn: new Date(2019, 1, 1),
          checkOut: new Date(2019, 1, 3),
          status: "checked in",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          roomId: 18,
          guestName: "John Doe 18",
          checkIn: new Date(2019, 1, 1),
          checkOut: new Date(2019, 1, 3),
          status: "not checked in",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          roomId: 19,
          guestName: "John Doe 19",
          checkIn: new Date(2019, 1, 1),
          checkOut: new Date(2019, 1, 3),
          status: "checked in",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          roomId: 20,
          guestName: "John Doe 20",
          checkIn: new Date(2019, 1, 1),
          checkOut: new Date(2019, 1, 3),
          status: "not checked in",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          roomId: 21,
          guestName: "John Doe 21",
          checkIn: new Date(2019, 1, 2),
          checkOut: new Date(2019, 1, 4),
          status: "checked in",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          roomId: 22,
          guestName: "John Doe 22",
          checkIn: new Date(2019, 1, 2),
          checkOut: new Date(2019, 1, 4),
          status: "not checked in",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          roomId: 23,
          guestName: "John Doe 23",
          checkIn: new Date(2019, 1, 2),
          checkOut: new Date(2019, 1, 4),
          status: "checked in",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          roomId: 24,
          guestName: "John Doe 24",
          checkIn: new Date(2019, 1, 2),
          checkOut: new Date(2019, 1, 4),
          status: "not checked in",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          roomId: 25,
          guestName: "John Doe 25",
          checkIn: new Date(2019, 1, 2),
          checkOut: new Date(2019, 1, 4),
          status: "checked in",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          roomId: 26,
          guestName: "John Doe 26",
          checkIn: new Date(2019, 1, 2),
          checkOut: new Date(2019, 1, 4),
          status: "not checked in",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          roomId: 27,
          guestName: "John Doe 27",
          checkIn: new Date(2019, 1, 2),
          checkOut: new Date(2019, 1, 4),
          status: "checked in",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          roomId: 28,
          guestName: "John Doe 28",
          checkIn: new Date(2019, 1, 2),
          checkOut: new Date(2019, 1, 4),
          status: "not checked in",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          roomId: 29,
          guestName: "John Doe 29",
          checkIn: new Date(2019, 1, 2),
          checkOut: new Date(2019, 1, 4),
          status: "checked in",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          roomId: 30,
          guestName: "John Doe 30",
          checkIn: new Date(2019, 1, 2),
          checkOut: new Date(2019, 1, 4),
          status: "not checked in",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          roomId: 31,
          guestName: "John Doe 31",
          checkIn: new Date(2019, 1, 2),
          checkOut: new Date(2019, 1, 4),
          status: "checked in",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          roomId: 32,
          guestName: "John Doe 32",
          checkIn: new Date(2019, 1, 2),
          checkOut: new Date(2019, 1, 4),
          status: "not checked in",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          roomId: 33,
          guestName: "John Doe 33",
          checkIn: new Date(2019, 1, 2),
          checkOut: new Date(2019, 1, 4),
          status: "checked in",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          roomId: 34,
          guestName: "John Doe 34",
          checkIn: new Date(2019, 1, 2),
          checkOut: new Date(2019, 1, 4),
          status: "not checked in",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          roomId: 35,
          guestName: "John Doe 35",
          checkIn: new Date(2019, 1, 2),
          checkOut: new Date(2019, 1, 4),
          status: "checked in",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          roomId: 36,
          guestName: "John Doe 36",
          checkIn: new Date(2019, 1, 2),
          checkOut: new Date(2019, 1, 4),
          status: "not checked in",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          roomId: 37,
          guestName: "John Doe 37",
          checkIn: new Date(2019, 1, 2),
          checkOut: new Date(2019, 1, 4),
          status: "checked in",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          roomId: 38,
          guestName: "John Doe 38",
          checkIn: new Date(2019, 1, 2),
          checkOut: new Date(2019, 1, 4),
          status: "not checked in",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          roomId: 39,
          guestName: "John Doe 39",
          checkIn: new Date(2019, 1, 2),
          checkOut: new Date(2019, 1, 4),
          status: "checked in",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          roomId: 40,
          guestName: "John Doe 40",
          checkIn: new Date(2019, 1, 2),
          checkOut: new Date(2019, 1, 4),
          status: "not checked in",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Bookings", null, {});
  }
};

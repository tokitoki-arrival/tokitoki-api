"use strict";
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define(
    "Booking",
    {
      roomId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Rooms",
          key: "id"
        }
      },
      guestName: { allowNull: false, type: DataTypes.STRING },
      checkIn: { allowNull: false, type: DataTypes.STRING },
      checkOut: { allowNull: false, type: DataTypes.STRING },
      status: {
        allowNull: false,
        type: DataTypes.ENUM("checked in", "not checked in")
      }
    },
    {}
  );
  Booking.associate = function(models) {
    // associations can be defined here
    models.Booking.belongsTo(models.Room, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Booking;
};

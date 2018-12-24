"use strict";
module.exports = (sequelize, DataTypes) => {
  const Room = sequelize.define(
    "Room",
    {
      roomNo: { allowNull: false, type: DataTypes.INTEGER },
      unitId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Units",
          key: "id"
        }
      }
    },
    {}
  );
  Room.associate = function(models) {
    // associations can be defined here
    models.Room.belongsTo(models.Unit, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });

    models.Room.hasMany(models.Booking);
  };
  return Room;
};

"use strict";
module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define(
    "Location",
    {
      location: {
        allowNull: false,
        type: DataTypes.STRING
      }
    },
    {}
  );
  Location.associate = function(models) {
    // associations can be defined here
    models.Location.hasMany(models.Property);
  };
  return Location;
};

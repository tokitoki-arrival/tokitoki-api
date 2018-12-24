"use strict";
module.exports = (sequelize, DataTypes) => {
  const Property = sequelize.define(
    "Property",
    {
      propertyName: { allowNull: false, type: DataTypes.STRING },
      locationId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Locations",
          key: "id"
        }
      }
    },
    {}
  );
  Property.associate = function(models) {
    // associations can be defined here
    models.Property.belongsTo(models.Location, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });

    models.Property.hasMany(models.Unit);
  };
  return Property;
};

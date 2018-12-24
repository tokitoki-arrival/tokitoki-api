"use strict";
module.exports = (sequelize, DataTypes) => {
  const Unit = sequelize.define(
    "Unit",
    {
      type: { allowNull: false, type: DataTypes.STRING },
      propertyId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Properties",
          key: "id"
        }
      }
    },
    {}
  );
  Unit.associate = function(models) {
    // associations can be defined here
    models.Unit.belongsTo(models.Property, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });

    models.Unit.hasMany(models.Room);
  };
  return Unit;
};

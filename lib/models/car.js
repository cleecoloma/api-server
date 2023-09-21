'use strict';

const CarModel = (sequelize, DataTypes) =>
  sequelize.define('Car', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

module.exports = CarModel;

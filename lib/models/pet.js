'use strict';

const PetModel = (sequelize, DataTypes) =>
  sequelize.define('Pet', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

module.exports = PetModel;

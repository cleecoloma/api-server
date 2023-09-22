'use strict';

const PetModel = (sequelize, DataTypes) =>
  sequelize.define('Pet', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

module.exports = PetModel;

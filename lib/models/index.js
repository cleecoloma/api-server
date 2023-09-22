'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const person = require('./person.js');
const pet = require('./pet.js');
const Collection = require('./collection.js');

const SQL_CONNECTION_STRING =
  process.env.SQL_CONNECTION_STRING || 'sqlite:memory:';

const sequelize = new Sequelize(SQL_CONNECTION_STRING);
const PersonModel = person(sequelize, DataTypes);
const PetModel = pet(sequelize, DataTypes);

// creates our relations in the SQL table
// PetModel.belongsTo(PersonModel, { foreignKey: 'customerId', targetKey: 'id' });
PersonModel.hasMany(PetModel, { foreignKey: 'customerId', sourceKey: 'id' });

module.exports = {
  sequelize,
  PersonModel: new Collection(PersonModel),
  PetModel: new Collection(PetModel),
};

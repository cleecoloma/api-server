'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const Person = require('./person.js')
const Pet = require('./pet.js');
const Car = require('./car.js');
const Collection = required('./collection.js');

const SQL_CONNECTION_STRING =
  process.env.SQL_CONNECTION_STRING || 'sqlite:memory:';

const sequelize = new Sequelize(SQL_CONNECTION_STRING);
const PersonModel = Person(sequelize, DataTypes);
const PetModel = Pet(sequelize, DataTypes);
const CarModel = Car(sequelize, DataTypes);

// creates our relations in the SQL table
OrderModel.belongsTo(CustomerModel, { foreignKey: 'customerId', targetKey: 'id' });
CustomerModel.hasMany(OrderModel, { foreignKey: 'customerId', sourceKey: 'id' });


module.exports = {
  sequelize,
  PersonModel: new Collection(PersonModel),
  PetModel: new Collection(PetModel),
  CarModel: new Collection(CarModel),
};

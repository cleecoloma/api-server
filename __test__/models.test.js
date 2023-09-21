'use strict';

const { sequelize, PersonModel, PetModel, CarModel } = require('../lib/models');

beforeAll(async () => {
  await sequelize.sync();
});
afterAll(async () => {
  await sequelize.drop();
});

describe('Testing the Model Associations', () => {
  let person;
  let pet;
  let car;

  test('Should be able to create a Person with and Order', async () => {
    person = await PersonModel.create({
      name: 'Jojo',
      age: 3,
    });
    pet = await PetModel.create({
      name: 'Koko',
      type: 'Shiba Inu',
      petId: pet.id,
    });
    car = await CarModel.create({
      name: 'Toyota',
      type: 'Corolla',
      carId: car.id,
    });

    expect(person.name).toEqual('Jojo');
    expect(pet.name).toEqual('Koko');
    expect(car.name).toEqual('Toyota');
    expect(person.age).toEqual(3);
    expect(pet.type).toEqual('Shiba Inu');
    expect(car.type).toEqual('Corolla');
    expect(pet.petId).toEqual(pet.id);
    expect(car.carId).toEqual(car.id);
  });

  test('Should be able to fetch a person and include all orders', async () => {
    person = await PersonModel.read(person.id, { include: [PetModel.model, CarModel.model]});

    console.log(person.Orders);
    expect(person.name).toEqual('Jojo');
    expect(person.Orders).toBeTruthy();
    expect(person.Orders[0].name).toEqual('Koko');
    expect(person.Orders[1].name).toEqual('Toyota');
  });
});

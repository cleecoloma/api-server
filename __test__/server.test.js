'use strict';

const supertest = require('supertest');
const server = require('../lib/server.js');
const { sequelize } = require('../lib/models/');
const request = supertest(server.app);

beforeAll(async () => {
  await sequelize.sync();
});

afterAll(async () => {
  await sequelize.drop();
});

describe('Testing the REST Router', () => {
  test('Should READ pet', async () => {
    let response = await request.get('/pet');

    expect(response.status).toEqual(200);
    expect(response.body.results).toBeTruthy();
  });

  test('Should CREATE pet', async () => {
    let response = await request.post('/pet').send({
      name: 'Koko',
      type: 'Shiba Inu',
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Koko');
    expect(response.body.type).toEqual('Shiba Inu');
  });

  test('Should UPDATE pet', async () => {
    let response = await request.patch('/pet/1').send({
      name: 'Jojo',
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Jojo');
  });

  test('Should DELETE pet', async () => {
    let response = await request.delete('/pet/1');

    expect(response.status).toEqual(204);
  });
});

describe('Testing the REST Router', () => {
  test('Should READ car', async () => {
    let response = await request.get('/car');

    expect(response.status).toEqual(200);
    expect(response.body.results).toBeTruthy();
  });

  test('Should CREATE car', async () => {
    let response = await request.post('/car').send({
      name: 'Tesla',
      type: 'Model Y',
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Tesla');
    expect(response.body.type).toEqual('Model Y');
  });

  test('Should UPDATE car', async () => {
    let response = await request.patch('/car/1').send({
      name: 'Toyota',
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Toyota');
  });

  test('Should DELETE car', async () => {
    let response = await request.delete('/car/1');

    expect(response.status).toEqual(204);
  });
});

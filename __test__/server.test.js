'use strict';

const supertest = require('supertest');
const server = require('../lib/server.js');
const { sequelize } = require('../lib/models');
const request = supertest(server.app);

beforeAll(async () => {
  await sequelize.sync();
});

afterAll(async () => {
  await sequelize.drop();
});

describe('Testing the REST Router', () => {
  test('Will this return a 404 error - bad path', async () => {
    let response = await request.get('/api/notAnEndpoint');

    expect(response.status).toEqual(404);
    expect(response.body.message).toEqual('Error 404 - Incorrect Path');
  });

  test('Will this return a 404 error - bad method', async () => {
    let response = await request.patch('/api/pet');

    expect(response.status).toEqual(404);
    expect(response.body.message).toEqual('Error 404 - Incorrect Method');
  });

  xtest('Will this return a 500 error', async () => {
    let response = await request.delete('/api/pet');

    expect(response.status).toEqual(500);
    expect(response.body.message).toEqual('Server Error');
  });

  test('Should READ pet', async () => {
    let response = await request.get('/api/pet');

    expect(response.status).toEqual(200);
    expect(response.body.results).toBeTruthy();
  });

  test('Should CREATE pet', async () => {
    let response = await request.post('/api/pet').send({
      name: 'Koko',
      type: 'Shiba Inu',
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Koko');
    expect(response.body.type).toEqual('Shiba Inu');
  });

  test('Should UPDATE pet', async () => {
    let response = await request.put('/api/pet/1').send({
      name: 'Jojo',
      type: 'Kangaroo',
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Jojo');
    expect(response.body.type).toEqual('Kangaroo');
  });

  test('Should DELETE pet', async () => {
    let response = await request.delete('/api/pet/1');

    expect(response.status).toEqual(204);
  });
});

describe('Testing the REST Router', () => {
  test('Should READ car', async () => {
    let response = await request.get('/api/car');

    expect(response.status).toEqual(200);
    expect(response.body.results).toBeTruthy();
  });

  test('Should CREATE car', async () => {
    let response = await request.post('/api/car').send({
      name: 'Tesla',
      type: 'Model Y',
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Tesla');
    expect(response.body.type).toEqual('Model Y');
  });

  test('Should UPDATE car', async () => {
    let response = await request.put('/api/car/1').send({
      name: 'Toyota',
      type: 'Corolla',
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Toyota');
    expect(response.body.type).toEqual('Corolla');
  });

  test('Should DELETE car', async () => {
    let response = await request.delete('/api/car/1');

    expect(response.status).toEqual(204);
  });
});

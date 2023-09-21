'use strict';

const express = require('express');
const { PersonModel } = require('../models');

const router = express.Router();

router.get('/person', async (request, response) => {
  let records = await PersonModel.findAll();
  response.status(200).send({ results: records });
});

router.post('/person', async (request, response) => {
  let record = await PersonModel.create(request.body);
  response.status(200).json(record);
});

router.put('/person/:id', async (request, response) => {
  let id = request.params.id;
  let recordToUpdate = await PersonModel.findByPk(id);
  recordToUpdate.update(request.body);
  await recordToUpdate.save();
  console.log('UPDATED RECORD', recordToUpdate);
  response.status(200).json(recordToUpdate);
});

router.delete('/person/:id', async (request, response) => {
  let id = request.params.id;
  await PersonModel.destroy({
    where: { id },
  });

  response.status(204).send('deleted');
});

module.exports = router;

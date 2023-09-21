'use strict';

const express = require('express');
const { PetModel } = require('../models');

const router = express.Router();

router.get('/pet', async (request, response) => {
  let records = await PetModel.findAll();
  response.status(200).send({ results: records });
});

// ADD THE FIND ONE PET ROUTE HERE

router.post('/pet', async (request, response) => {
  let record = await PetModel.create(request.body);
  response.status(200).json(record);
});

router.put('/pet/:id', async (request, response) => {
  let id = request.params.id;
  let recordToUpdate = await PetModel.findByPk(id);
  recordToUpdate.update(request.body);
  await recordToUpdate.save();
  console.log('UPDATED RECORD', recordToUpdate);
  response.status(200).json(recordToUpdate);
});

router.delete('/pet/:id', async (request, response) => {
  let id = request.params.id;
  await PetModel.destroy({
    where: { id },
  });

  response.status(204).send('deleted');
});

module.exports = router;

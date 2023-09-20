'use strict';

const express = require('express');
const { PetModel } = require('./models');

const router = express.Router();

router.get('/pet', async (req, res) => {
  let records = await PetModel.findAll();
  res.status(200).send({ results: records });
});

router.post('/pet', async (req, res) => {
  let record = await PetModel.create(req.body);
  res.status(200).json(record);
});

router.patch('/pet/:id', async (req, res) => {
  let id = req.params.id;
  let recordToUpdate = await PetModel.findByPk(id);
  recordToUpdate.update(req.body);
  await recordToUpdate.save();
  console.log('UPDATED RECORD', recordToUpdate);
  res.status(200).json(recordToUpdate);
});

router.delete('/pet/:id', async (req, res) => {
  let id = req.params.id;
  await PetModel.destroy({
    where: { id },
  });

  res.status(204).send('deleted');
});

module.exports = router;

'use strict';

const express = require('express');
const { CarModel } = require('../models');

const router = express.Router();

router.get('/car', async (req, res) => {
  let records = await CarModel.findAll();
  res.status(200).send({ results: records });
});

router.post('/car', async (req, res) => {
  let record = await CarModel.create(req.body);
  res.status(200).json(record);
});

router.put('/car/:id', async (req, res) => {
  let id = req.params.id;
  let recordToUpdate = await CarModel.findByPk(id);
  recordToUpdate.update(req.body);
  await recordToUpdate.save();
  console.log('UPDATED RECORD', recordToUpdate);
  res.status(200).json(recordToUpdate);
});

router.delete('/car/:id', async (req, res) => {
  let id = req.params.id;
  await CarModel.destroy({
    where: { id },
  });

  res.status(204).send('deleted');
});

module.exports = router;

'use strict';

const express = require('express');
const { PetModel } = require('../models');

const router = express.Router();

router.get('/pet', handleGet);
router.post('/pet', handlePost);
router.put('/pet/:id', handlePut);
router.delete('/pet/:id', handleDelete);

async function handleGet(request, response) {
  let records = await PetModel.findAll();
  response.status(200).send({ results: records });
};

async function handlePost(request, response) {
  let record = await PetModel.create(request.body);
  response.status(200).json(record);
};

async function handlePut(request, response) {
  let record = await PetModel.update(request.params.id, request.body);
  response.status(200).json(record);
};

async function handleDelete(request, response) {
  let result = await PetModel.destroy(request.params.id);
  response.status(200).json({ result });
};

module.exports = router;

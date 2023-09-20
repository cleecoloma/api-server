'use strict';

const express = require('express');
const cors = require('cors');
const app = express(); //

const petRouter = require('./router.js');
const carRouter = require('./router.js');

app.use(cors());
app.use(express.json());
app.use(petRouter);
app.use(carRouter);

// errorHandlers go down

module.exports = {
  app,
  start: (port) => {
    app.listen(port, () => {
      console.log('REST server is running!');
    });
  },
};

'use strict';

const express = require('express');
const cors = require('cors');
const app = express(); //

const petRouter = require('./routes/pet.js');
const carRouter = require('./routes/car.js');
const error404 = require('../lib/error-handlers/404.js');
const error500 = require('../lib/error-handlers/500.js');
const pathValidator = require('./middleware/pathValidator.js')
const methodValidator = require('./middleware/methodValidator.js');

app.use(cors());
app.use(express.json());
app.use(pathValidator);
app.use(methodValidator);
app.use('/api', petRouter);
app.use('/api', carRouter);

app.use((error, request, response, next) => {
  if (error.path || error.method) {
    error404(error, request, response, next);
  } else {
    error500(error, request, response, next);
  }
});

module.exports = {
  app,
  start: (port) => {
    app.listen(port, () => {
      console.log('REST server is running!');
    });
  },
};

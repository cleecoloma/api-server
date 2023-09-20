'use strict';

function error500(error, request, response, next) {
  response.status(500).send({ message: 'Server Error' });
}

module.exports = error500;

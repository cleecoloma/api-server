'use strict';

function methodValidator(request, response, next) {
  // console.log(request.method);
  if (
    request.method === 'GET' ||
    request.method === 'POST' ||
    request.method === 'PUT' ||
    request.method === 'DELETE'
  ) {
    next();
  } else {
    next({ method: 'Error 404 - Incorrect Method' });
  }
}
module.exports = methodValidator;
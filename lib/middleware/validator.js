'use strict';

function validator(request, response, next) {
  if (request.path !== '/api/pet' || request.path !== '/api/car') {
    next({path : 'Error 404 - Incorrect Path'});
  } else if ( 
    request.method !== 'GET' || 
    request.method !== 'POST' ||
    request.method !== 'PUT' ||
    request.method !== 'DELETE'
    ) {
    next({method : 'Error 404 - Incorrect Method'});
  } else {
    next();
  }
}
module.exports = validator;

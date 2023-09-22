'use strict';

function pathValidator(request, response, next) {
  if (request.path.includes('/api/person')) {
    next();
  } else if (request.path.includes('/api/pet')) {
  } else if (request.path.includes('/api/person')) {
    next();
  } else {
    next({ path: 'Error 404 - Incorrect Path' });
  }
}

module.exports = pathValidator;

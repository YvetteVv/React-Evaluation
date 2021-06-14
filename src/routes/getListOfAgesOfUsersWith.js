'use strict';
const mockDBCalls = require('../database/index.js');

const getListOfAgesOfUsersWithHandler = async (request, response) => {
  // Due to it is a get method, we get the query from the request URL
  // e.g. http://localhost:5000/users/age?hobby=pc gaming
  const hobbyToLookup = request.query.hobby
  // console.log(hobbyToLookup)
  const data = await mockDBCalls.getListOfAgesOfUsersWith(hobbyToLookup);
  return response.status(200).send(JSON.stringify(data));
};

module.exports = (app) => {
  app.get('/users/age', getListOfAgesOfUsersWithHandler);
};

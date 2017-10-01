'use strict';

const Response = require('../utils/response.js');
const logger = require('winston');

module.exports = function(router) {
  router.route('/')
    .get((req, res, next) => {
      const dummyData = [{
        month: 1,
        amount: Math.floor(Math.random() * 1000)
      },{
        month: 2,
        amount: Math.floor(Math.random() * 1000)
      },{
        month: 3,
        amount: Math.floor(Math.random() * 1000)
      },{
        month: 4,
        amount: Math.floor(Math.random() * 1000)
      }];
      Response.OK(dummyData).send(res);
    });
};

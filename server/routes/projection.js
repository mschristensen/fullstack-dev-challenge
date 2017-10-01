'use strict';

const Response = require('../utils/response.js');
const logger = require('winston');
const ProjectionController = require('../controllers/projection');

module.exports = function(router) {
  router.route('/')
    .get((req, res) => {
      return ProjectionController(req, res).calculateMonthlyProjectionData({});
    });
};

'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const logger = require('winston');
const helmet = require('helmet');
let app;

module.exports = function() {
  return new Promise((resolve, reject) => {
    app = express();

    // Security
    app.use(helmet());
    
    // Log HTTP requests
    app.use(morgan('common'));

    // Parse request bodies
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json({ type: '*/*' }));

    logger.info('[SERVER] Initializing routes');
    require('../../routes/index')(app);

    app.listen(process.env.PORT || 3001);
    logger.info('[SERVER] Listening on port ' + (process.env.PORT || 3001));

    return resolve(app);
  });
};
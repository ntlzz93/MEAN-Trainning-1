'use strict';

var env = require('./env/' + process.env.NODE_ENV + '.js');

module.exports = env;

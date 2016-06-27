/**
 * Created by ntlzz on 6/25/2016.
 */
'use strict';

var config = require('./config'),
    mongoose = require('mongoose');

module.exports = function() {
    var db = mongoose.connect(config.db);

    require('../app/model/contact_model');

    return db;
};
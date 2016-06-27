/**
 * Created by ntlzz on 6/25/2016.
 */
'use strict';

var express = require('express'),
    config = require('./config'),
    bodyParser = require('body-parser'),
    morgan      = require('morgan');

module.exports = function(){

    var app = express();

    app.use(bodyParser.urlencoded({
        extended : true
    }));

    app.use(bodyParser.json());

    if (app.get('env') == 'production') {
        app.use(morgan('common', { skip: function(req, res) { return res.statusCode < 400 }, stream: __dirname + '/../morgan.log' }));
    } else {
        app.use(morgan('dev'));
    }

    app.set('view','./app/view');
    app.set('view engine','ejs');

    app.use(express.static(__dirname + '/public'));

    require('../app/router/contact')(app);

    return app;
};
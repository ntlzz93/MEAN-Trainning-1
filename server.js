'use strict';

process.env.NODE_ENV  = process.env.NODE_ENV || 'development';

var config = require('./config/config'),
    express = require('./config/express'),
    mongoose = require('./config/mongoose');


var db = mongoose(),
    app = express();

app.get('/',function(req,res){

    res.end('Hello World');
});

app.listen(config.port,function(){
    console.log(process.env.NODE_ENV  + ' server is running at '+ config.host + ' port ' +config.port);
});

module.exports = app;

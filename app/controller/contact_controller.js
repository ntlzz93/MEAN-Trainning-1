/**
 * Created by ntlzz on 6/25/2016.
 */
'use strict';

var ContactModel = require('mongoose').model('contactlist');

exports.create = function (req, res, next) {
    var model = new ContactModel();
    var data = {
        name: req.body.name,
        email: req.body.email,
        number: req.body.number
    };
    model.insert(data, function (err, results) {
        if (err)
            console.error(err.stack);
        else {
            res.json(results);
            // notify success
            next();
        }
    })
};

exports.findByParamId = function (req, res, next, id) {
    var model = new ContactModel();

    model.findById(req, res, next, id);
};

exports.update = function (req, res, next) {
    var model = new ContactModel();
    var contact = req.contact;
    var id = contact._id;

    var dataUpdate = {
        name: req.body.name,
        email: req.body.email,
        number: req.body.number
    };

    model.update(id, dataUpdate, function (err, items) {
        if (err)
            console.error(err.stack);
        else {
            res.json(items);
            //notify here
            next();
        }
    });
}

exports.delete = function(req,res,next){
  var model = new ContactModel();
   var id = req.contact._id;

    model.delete(id,function(err,logs){
       if(err){
           console.error(err.stack);
       } else{
           res.json(logs);
           // notify here
           next();
       }
    });
};

exports.list = function (req, res, next) {
    var model = new ContactModel();
    model.selectAll(function (err, data) {
        if (err) {
            console.error(err.stack);
        } else {
            res.json(data);
            // send to view

            next();
        }
    });

};

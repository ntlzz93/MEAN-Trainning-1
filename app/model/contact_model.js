/**
 * Created by ntlzz on 6/25/2016.
 */
'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ContactSchema = new Schema({
    name: String,
    email: String,
    number: String
}, {collection: 'contactlist'});

ContactSchema.methods.insert = function (data, callback) {
    var contact = new ContactModel(data);

    contact.save(function (err, item) {
        if (err)
            console.error(err.stack);
        else {
            callback(null, item);
        }
        ;
    });
};

ContactSchema.methods.update = function (id, data, callback) {

    ContactModel.findOne({_id: id}, function (err, contact) {
        if (err) {
            return callback(err);
        } else {
            contact.name = data.name;
            contact.email = data.email,
                contact.number = data.number;

            contact.save(function (err) {
                if (err)
                    return callback(err);
                else {
                    callback(null, contact);
                }
            });
        }
    });

};

ContactSchema.methods.delete = function (id, callback) {
    ContactModel.findByIdAndRemove({_id : id},function(err,logs){
       if(err){
           return callback(err);
       } else{
            callback(null,logs);
       }
    });
}

ContactSchema.methods.findById = function (req, res, next, id) {
    ContactModel.findOne({
        _id: id
    }, function (err, contact) {
        if (err)
            return next(err);
        else {
            req.contact = contact;
            next();
        }
    });
};

ContactSchema.methods.selectAll = function (callback) {
    ContactModel.find({}, function (err, items) {
        if (err)
            console.error(err.stack);
        else {
            callback(null, items);
        }
        ;
    });
};

var ContactModel = mongoose.model('contactlist', ContactSchema);

module.exports = ContactModel;
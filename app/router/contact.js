/**
 * Created by ntlzz on 6/25/2016.
 */

'use strict';

var contactController =  require('../../app/controller/contact_controller');

module.exports = function(app){

    app.route('/contactlist').get(contactController.list).post(contactController.create);

    app.route('/contactlist/:contactId').put(contactController.update).delete(contactController.delete);

    app.param('contactId',contactController.findByParamId);
};
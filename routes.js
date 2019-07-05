'use strict';
module.exports = function(app) {
    var todoList = require('./controller');
    app.route('/').get(todoList.index);
    app.route('/customers').get(todoList.customers);
    app.route('/customers/find').get(todoList.findCustomers);
    app.route('/customers/create').post(todoList.createCustomers);
    app.route('/customers/update').put(todoList.updateCustomers);
    app.route('/customers/delete').delete(todoList.deleteCustomers);
};
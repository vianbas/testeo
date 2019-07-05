'use strict';
var response = require('./res');
var connection = require('./conn');
exports.customers = function(req, res) {
    connection.query('SELECT * FROM customer', function (error, rows, fields){
        if(error){
            console.log(error)            
        } else{
            response.ok(rows, res)
        }
    });
};
exports.index = function(req, res) {
    response.ok("Hello from the Node JS RESTful side!", res)
};

exports.findCustomers = function(req, res) {
    var customer_id = req.body.customer_id;
    connection.query('SELECT * FROM customer where customer_id = ?',
    [ customer_id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.createCustomers = function(req, res) {
    var username = req.body.username;
    var name = req.body.name;
    var email = req.body.email;
    var address = req.body.address;
    var phone_number = req.body.phone_number;
    connection.query('INSERT INTO customer (username, name, email, address, phone_number) values (?,?,?,?,?)',
    [ username, name, email, address, phone_number ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("success add new customer!", res)
        }
    });
};
exports.updateCustomers = function(req, res) {
    var customer_id = req.body.customer_id;
    var username = req.body.username;
    var name = req.body.name;
    var email = req.body.email;
    var address = req.body.address;
    var phone_number = req.body.phone_number;
    connection.query('UPDATE customer SET username = ?, name = ?, email = ?, address = ?, phone_number = ? WHERE customer_id = ?',
    [ customer_id, username, name, email, address, phone_number ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil merubah data customer!", res)
        }
    });
};
exports.deleteCustomers = function(req, res) {
    
    var customer_id = req.body.customer_id;
    connection.query('DELETE FROM customer WHERE customer_id = ?',
    [ customer_id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil menghapus customer!", res)
        }
    });
};
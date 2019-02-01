"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require("mysql");
var Promise = require("promise");
var customerDAO = /** @class */ (function () {
    function customerDAO() {
    }
    customerDAO.prototype.findAllCustomers = function () {
        var connection = mysql.createConnection({
            host: "localhost",
            database: "jdbc",
            port: 3306,
            user: "root",
            password: "root"
        });
        return new Promise(function (resolve, reject) {
            connection.query("SELECT * FROM customer", function (err, results, fields) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results);
                }
            });
        });
    };
    return customerDAO;
}());
exports.customerDAO = customerDAO;

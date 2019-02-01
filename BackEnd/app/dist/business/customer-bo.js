"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_pool_1 = require("../db/db-pool");
var dao_factory_1 = require("../dao/dao-factory");
var Promise = require("promise");
var CustomerBO = /** @class */ (function () {
    function CustomerBO() {
    }
    CustomerBO.prototype.findAllCustomers = function () {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var customerDAO = dao_factory_1.getDAO(dao_factory_1.DAOTypes.CUSTOMER, connection);
                    var promise = customerDAO.findAll();
                    promise.then(function (customers) {
                        resolve(customers);
                        db_pool_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_pool_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };
    CustomerBO.prototype.findCustomer = function (id) {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var customerDAO = dao_factory_1.getDAO(dao_factory_1.DAOTypes.CUSTOMER, connection);
                    var promise = customerDAO.find(id);
                    promise.then(function (customer) {
                        resolve(customer);
                        db_pool_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_pool_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };
    CustomerBO.prototype.saveCustomer = function (customer) {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var customerDAO = dao_factory_1.getDAO(dao_factory_1.DAOTypes.CUSTOMER, connection);
                    var promise = customerDAO.save(customer);
                    promise.then(function (result) {
                        resolve(result);
                        db_pool_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_pool_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };
    CustomerBO.prototype.updateCustomer = function (customer) {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var customerDAO = dao_factory_1.getDAO(dao_factory_1.DAOTypes.CUSTOMER, connection);
                    var promise = customerDAO.update(customer);
                    promise.then(function (result) {
                        resolve(result);
                        db_pool_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_pool_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };
    CustomerBO.prototype.deleteCustomer = function (id) {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var customerDAO = dao_factory_1.getDAO(dao_factory_1.DAOTypes.CUSTOMER, connection);
                    var promise = customerDAO.delete(id);
                    promise.then(function (result) {
                        resolve(result);
                        db_pool_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_pool_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };
    CustomerBO.prototype.countCustomers = function () {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var customerDAO = dao_factory_1.getDAO(dao_factory_1.DAOTypes.CUSTOMER, connection);
                    var promise = customerDAO.count();
                    promise.then(function (count) {
                        resolve(count);
                    }).catch(function (err) {
                        reject(err);
                    });
                }
            });
        });
    };
    return CustomerBO;
}());
exports.CustomerBO = CustomerBO;

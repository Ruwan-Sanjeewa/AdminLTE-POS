"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require("mysql");
exports.pool = mysql.createPool({
    host: "localhost",
    port: 3306,
    database: "jdbc",
    user: "root",
    password: "root",
    connectionLimit: 10
});

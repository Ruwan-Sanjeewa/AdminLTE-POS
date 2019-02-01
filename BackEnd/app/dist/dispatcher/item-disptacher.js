"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var itemDispatcher = express.Router();
itemDispatcher.route("")
    .get(function (req, res) {
    res.send("Find All Items");
})
    .post(function (req, res) {
    res.send("Save a Item");
});
itemDispatcher.route("/:code")
    .get(function (req, res) {
    res.send("Find a Item");
})
    .put(function (req, res) {
    res.send("Update a Item");
})
    .delete(function (req, res) {
    res.send("Delete a Item");
});
exports.default = itemDispatcher;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var customer_dispatcher_1 = __importDefault(require("./customer-dispatcher"));
var item_dispatcher_1 = __importDefault(require("./item-dispatcher"));
// This will return a new instance of a router object that can be used to handle routing
var mainDispatcher = express.Router();
mainDispatcher.use(express.json());
mainDispatcher.use("/api/v1/customers", customer_dispatcher_1.default);
mainDispatcher.use("/api/v1/items", item_dispatcher_1.default);
exports.default = mainDispatcher;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var order_bo_1 = require("../business/order-bo");
var cors = require("cors");
var orderDispatcher = express.Router();
orderDispatcher.route("")
    .get(function (req, res) {
    var promise = new order_bo_1.OrderBo().findAllOrders();
    promise.then(function (orders) {
        res.status(200).json(orders);
    }).catch(function (error) {
        res.status(500).send(error);
    });
})
    .post(function (req, res) {
    if (!("id" in req.body && "date" in req.body && "customerId" in req.body)) {
        res.status(400).send("Invalid Request Body");
        return;
    }
    var promise = new order_bo_1.OrderBo().saveOrder(req.body);
    promise.then(function (status) { return res.status(201).json(status); })
        .catch(function (err) { return res.status(500).send(err); });
}).head(cors({
    exposedHeaders: ['X-count']
}), function (req, res) {
    var promise = new order_bo_1.OrderBo().countOrder();
    promise.then(function (count) {
        res.append("X-Count", count + "");
        res.sendStatus(200);
    }).catch(function (error) {
        res.sendStatus(500);
    });
});
orderDispatcher.route("/:id")
    .get(function (req, res) {
    var promise = new order_bo_1.OrderBo().findOrder(req.params.id);
    promise.then(function (orders) {
        if (orders.length > 0) {
            res.status(200).send(orders[0]);
        }
        else {
            res.sendStatus(404);
        }
    }).catch(function (error) {
        res.status(500).send(error);
    });
})
    .delete(function (req, res) {
    var promise = new order_bo_1.OrderBo().deleteOrder(req.params.id);
    promise.then(function (status) {
        if (status) {
            res.status(200).send(true);
        }
        else {
            res.sendStatus(404);
        }
    }).catch(function (error) {
        res.status(500).send(error);
    });
})
    .put(function (req, res) {
    if (!("id" in req.body && "date" in req.body && "customerId" in req.body)) {
        res.status(400).send("Invalid Request Body");
        return;
    }
    if (req.body.id !== req.params.id) {
        res.status(400).send("Mismatched Order ID");
        return;
    }
    var promise = new order_bo_1.OrderBo().updateOrder(req.body);
    promise.then(function (status) {
        if (status) {
            res.status(200).send(true);
        }
        else {
            res.sendStatus(404);
        }
    }).catch(function (error) {
        res.status(500).send(error);
    });
});
exports.default = orderDispatcher;

import express = require("express");
import {OrderBo} from "../business/order-bo";

import cors=require("cors");



const orderDispatcher = express.Router();

orderDispatcher.route("")
    .get((req, res) => {
        const promise = new OrderBo().findAllOrders();
        promise.then(orders=>{
            res.status(200).json(orders);
        }).catch(error=>{
            res.status(500).send(error);
        });
    })
    .post((req, res) => {
        if (!("id" in req.body && "date" in req.body && "customerId" in req.body )){
            res.status(400).send("Invalid Request Body");
            return;
        }

        const promise = new OrderBo().saveOrder(req.body);
        promise.then(status => res.status(201).json(status))
            .catch(err=>res.status(500).send(err));

    }).head(cors({
    exposedHeaders:['X-count']
}),(req,res)=>{
    const promise= new OrderBo().countOrder()
    promise.then(count=>{
        res.append("X-Count",count+"");
        res.sendStatus(200);
    }).catch(error=>{
        res.sendStatus(500);
    })
});


orderDispatcher.route("/:id")
    .get((req, res) => {
        const promise = new OrderBo().findOrder(req.params.id);
        promise.then(orders=>{

            if (orders.length > 0){
                res.status(200).send(orders[0]);
            }else{
                res.sendStatus(404);
            }

        }).catch(error=>{
            res.status(500).send(error);
        });
    })
    .delete((req, res) => {
        const promise = new OrderBo().deleteOrder(req.params.id);
        promise.then(status=>{

            if (status){
                res.status(200).send(true);
            }else{
                res.sendStatus(404);
            }

        }).catch(error=>{
            res.status(500).send(error);
        });
    })
    .put((req, res) => {
        if (!("id" in req.body && "date" in req.body && "customerId" in req.body)){
            res.status(400).send("Invalid Request Body");
            return;
        }

        if (req.body.id !== req.params.id){
            res.status(400).send("Mismatched Order ID");
            return;
        }

        const promise = new OrderBo().updateOrder(req.body);
        promise.then(status=>{

            if (status){
                res.status(200).send(true);
            }else{
                res.sendStatus(404);
            }

        }).catch(error=>{
            res.status(500).send(error);
        });
    });

export default orderDispatcher;

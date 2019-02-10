import express = require("express");
import customerDispatcher from "./customer-dispatcher";
import itemDispatcher from "./item-dispatcher";
import cors =require("cors");
import orderDispatcher from "./order-dispatcher";

// This will return a new instance of a router object that can be used to handle routing
const mainDispatcher = express.Router();

mainDispatcher.use(express.json());
mainDispatcher.use(cors());
mainDispatcher.use("/api/v1/customers",customerDispatcher);
mainDispatcher.use("/api/v1/items",itemDispatcher);
mainDispatcher.use("/api/v1/orders",orderDispatcher);
export default mainDispatcher;

import express = require("express");
import customerDispatcher from "./customer-dispatcher";
import itemDispatcher from "./item-dispatcher";

// This will return a new instance of a router object that can be used to handle routing
const mainDispatcher = express.Router();

mainDispatcher.use(express.json());

mainDispatcher.use("/api/v1/customers",customerDispatcher);
mainDispatcher.use("/api/v1/items",itemDispatcher);

export default mainDispatcher;

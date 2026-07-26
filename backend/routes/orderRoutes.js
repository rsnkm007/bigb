import express from "express";

import {

    createOrder,

    getOrders,

    getOrderItems

} from "../controllers/orderController.js";

const router = express.Router();

router.post("/", createOrder);

router.get("/:firebase_uid", getOrders);

router.get("/items/:order_id", getOrderItems);

export default router;
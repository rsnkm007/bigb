import express from "express";

import {

    adminLogin,
    addProduct,
    updateProduct,
    deleteProduct,
    getAllOrders,
    getOrderDetails,
    updateOrderStatus,
    getAllUsers,
    getDashboardStats

} from "../controllers/adminController.js";

const router = express.Router();

router.post("/login", adminLogin);

router.post("/products", addProduct);

router.put("/products/:id", updateProduct);

router.delete("/products/:id", deleteProduct);

router.get("/orders", getAllOrders);

router.get("/orders/:id", getOrderDetails);

router.put("/orders/:id/status", updateOrderStatus);

router.get("/users", getAllUsers);

router.get("/dashboard/stats", getDashboardStats);

export default router;
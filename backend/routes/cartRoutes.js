import express from "express";

import {

    addToCart,

    getCart,

    updateQuantity,

    removeFromCart,

    clearCart

} from "../controllers/cartController.js";

const router = express.Router();

router.post("/", addToCart);

router.get("/:firebase_uid", getCart);

router.put(
    "/:firebase_uid/:product_id",
    updateQuantity
);

router.delete(
    "/:firebase_uid/:product_id",
    removeFromCart
);

router.delete(
    "/:firebase_uid",
    clearCart
);

export default router;
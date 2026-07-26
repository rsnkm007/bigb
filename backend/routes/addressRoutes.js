import express from "express";

import {

    addAddress,
    getAddresses,
    updateAddress,
    deleteAddress

} from "../controllers/addressController.js";

const router = express.Router();

router.post("/", addAddress);

router.get("/:firebase_uid", getAddresses);

router.put("/:id", updateAddress);

router.delete("/:id", deleteAddress);

export default router;
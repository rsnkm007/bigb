import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import paymentRoutes from "./routes/paymentRoutes.js";

dotenv.config();

const app = express();

app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);

app.use(express.json());

app.use("/api/payment", paymentRoutes);

app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Backend is running 🚀");
});

app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

});
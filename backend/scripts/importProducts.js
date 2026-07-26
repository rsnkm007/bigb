import dotenv from "dotenv";
dotenv.config();

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import db from "../config/db.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const productsPath = path.join(
    __dirname,
    "../seed/products.json"
);

const products = JSON.parse(
    fs.readFileSync(productsPath, "utf8")
);

db.query("DELETE FROM products", (err) => {

    if (err) throw err;

    console.log("Old products deleted.");

    const sql = `
        INSERT INTO products
        (
            featured,
            category,
            company,
            name,
            description,
            regular_price,
            offer_price,
            image
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    products.forEach(product => {

        db.query(sql, [

            product.featured,

            product.category,

            product.company,

            product.name,

            product.description,

            product.regular_price,

            product.offer_price,

            product.image

        ]);

    });

    console.log(`${products.length} Products Imported`);

    db.end();

});
import db from "../config/db.js";

// Add product to cart
export const addToCart = (req, res) => {

    const {

        firebase_uid,

        product_id

    } = req.body;

    const sql = `

        INSERT INTO cart
        (
            firebase_uid,
            product_id,
            quantity
        )

        VALUES (?, ?, 1)

        ON DUPLICATE KEY UPDATE

            quantity = quantity + 1

    `;

    db.query(

        sql,

        [

            firebase_uid,

            product_id

        ],

        (err) => {

            if (err) {

                console.error(err);

                return res.status(500).json({

                    message: "Error adding product to cart"

                });

            }

            res.json({

                message: "Product added to cart"

            });

        }

    );

};

// Get user's cart
export const getCart = (req, res) => {

    const { firebase_uid } = req.params;

    const sql = `

        SELECT

            products.*,

            cart.quantity

        FROM cart

        INNER JOIN products

        ON cart.product_id = products.id

        WHERE cart.firebase_uid = ?

    `;

    db.query(

        sql,

        [firebase_uid],

        (err, results) => {

            if (err) {

                console.error(err);

                return res.status(500).json({

                    message: "Error fetching cart"

                });

            }

            res.json(results);

        }

    );

};

// Update quantity
export const updateQuantity = (req, res) => {

    const {

        firebase_uid,

        product_id

    } = req.params;

    const {

        quantity

    } = req.body;

    const sql = `

        UPDATE cart

        SET quantity = ?

        WHERE firebase_uid = ?

        AND product_id = ?

    `;

    db.query(

        sql,

        [

            quantity,

            firebase_uid,

            product_id

        ],

        (err) => {

            if (err) {

                console.error(err);

                return res.status(500).json({

                    message: "Error updating quantity"

                });

            }

            res.json({

                message: "Quantity updated"

            });

        }

    );

};

// Remove product
export const removeFromCart = (req, res) => {

    const {

        firebase_uid,

        product_id

    } = req.params;

    const sql = `

        DELETE FROM cart

        WHERE firebase_uid = ?

        AND product_id = ?

    `;

    db.query(

        sql,

        [

            firebase_uid,

            product_id

        ],

        (err) => {

            if (err) {

                console.error(err);

                return res.status(500).json({

                    message: "Error removing product"

                });

            }

            res.json({

                message: "Removed successfully"

            });

        }

    );

};

export const clearCart = (req, res) => {

    const { firebase_uid } = req.params;

    const sql = `
        DELETE FROM cart
        WHERE firebase_uid = ?
    `;

    db.query(sql, [firebase_uid], (err) => {

        if (err) {

            console.error(err);

            return res.status(500).json({
                success: false,
                message: "Database Error"
            });

        }

        res.json({
            success: true,
            message: "Cart Cleared"
        });

    });

};
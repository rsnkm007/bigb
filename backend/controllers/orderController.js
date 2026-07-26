import db from "../config/db.js";

export const createOrder = (req, res) => {

    const {

        firebase_uid,
        address_id,
        razorpay_order_id,
        razorpay_payment_id,
        total_amount,
        cart

    } = req.body;

    const orderSql = `

        INSERT INTO orders
        (
            firebase_uid,
            address_id,
            razorpay_order_id,
            razorpay_payment_id,
            total_amount,
            payment_status,
            order_status
        )

        VALUES (?, ?, ?, ?, ?, ?, ?)

    `;

    db.query(

        orderSql,

        [

            firebase_uid,
            address_id,
            razorpay_order_id,
            razorpay_payment_id,
            total_amount,
            "Paid",
            "Placed"

        ],

        (err, result) => {

            if (err) {

                console.error(err);

                return res.status(500).json({

                    success: false,
                    message: "Error creating order"

                });

            }

            const orderId = result.insertId;

            if (cart.length === 0) {

                return res.json({

                    success: true,
                    orderId

                });

            }

            let completed = 0;

            let hasError = false;

            cart.forEach((item) => {

                const itemSql = `

                    INSERT INTO order_items
                    (
                        order_id,
                        product_id,
                        quantity,
                        price
                    )

                    VALUES (?, ?, ?, ?)

                `;

                db.query(

                    itemSql,

                    [

                        orderId,
                        item.id,
                        item.quantity,
                        item.offer_price

                    ],

                    (err) => {

                        if (hasError) return;

                        if (err) {

                            hasError = true;

                            console.error(err);

                            return res.status(500).json({

                                success: false,
                                message: "Error saving order items"

                            });

                        }

                        completed++;

                        if (completed === cart.length) {

                            res.json({

                                success: true,
                                orderId

                            });

                        }

                    }

                );

            });

        }

    );

};

export const getOrders = (req, res) => {

    const { firebase_uid } = req.params;

    const sql = `

        SELECT *

        FROM orders

        WHERE firebase_uid = ?

        ORDER BY created_at DESC

    `;

    db.query(

        sql,

        [firebase_uid],

        (err, results) => {

            if (err) {

                console.error(err);

                return res.status(500).json({

                    message: "Error fetching orders"

                });

            }

            res.json(results);

        }

    );

};

export const getOrderItems = (req, res) => {

    const { order_id } = req.params;

    const sql = `

        SELECT

            order_items.*,

            products.name,

            products.image

        FROM order_items

        JOIN products

        ON order_items.product_id = products.id

        WHERE order_items.order_id = ?

    `;

    db.query(

        sql,

        [order_id],

        (err, results) => {

            if (err) {

                console.error(err);

                return res.status(500).json({

                    message: "Error fetching order items"

                });

            }

            res.json(results);

        }

    );

};


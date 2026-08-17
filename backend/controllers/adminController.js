import db from "../config/db.js";

export const adminLogin = (req, res) => {

    const {

        username,
        password

    } = req.body;

    const sql = `

        SELECT *

        FROM admins

        WHERE username = ?

        AND password = ?

    `;

    db.query(

        sql,

        [

            username,
            password

        ],

        (err, results) => {

            if (err) {

                console.error(err);

                return res.status(500).json({

                    success: false,

                    message: "Database Error"

                });

            }

            if (results.length === 0) {

                return res.status(401).json({

                    success: false,

                    message: "Invalid Username or Password"

                });

            }

            const admin = {

                id: results[0].id,

                username: results[0].username

            };

            res.json({

                success: true,

                admin

            });

        }

    );

};

export const addProduct = (req, res) => {

    const {

        featured,
        category,
        company,
        name,
        description,
        regular_price,
        offer_price,
        image

    } = req.body;

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

        VALUES
        (
            ?,?,?,?,?,?,?,?
        )

    `;

    db.query(

        sql,

        [

            featured,
            category,
            company,
            name,
            description,
            regular_price,
            offer_price,
            image

        ],

        (err, result) => {

            if (err) {

                console.error(err);

                return res.status(500).json({

                    success: false,

                    message: "Database Error"

                });

            }

            res.json({

                success: true,

                message: "Product Added Successfully",

                productId: result.insertId

            });

        }

    );

};

export const updateProduct = (req, res) => {

    const { id } = req.params;

    const {

        featured,
        category,
        company,
        name,
        description,
        regular_price,
        offer_price,
        image

    } = req.body;

    const sql = `

        UPDATE products

        SET

            featured = ?,

            category = ?,

            company = ?,

            name = ?,

            description = ?,

            regular_price = ?,

            offer_price = ?,

            image = ?

        WHERE id = ?

    `;

    db.query(

        sql,

        [

            featured,
            category,
            company,
            name,
            description,
            regular_price,
            offer_price,
            image,
            id

        ],

        (err, result) => {

            if (err) {

                console.error(err);

                return res.status(500).json({

                    success: false,

                    message: "Database Error"

                });

            }

            if (result.affectedRows === 0) {

                return res.status(404).json({

                    success: false,

                    message: "Product Not Found"

                });

            }

            res.json({

                success: true,

                message: "Product Updated Successfully"

            });

        }

    );

};

export const deleteProduct = (req, res) => {

    const { id } = req.params;

    const sql = `

        DELETE FROM products

        WHERE id = ?

    `;

    db.query(

        sql,

        [id],

        (err, result) => {

            if (err) {

                console.error(err);

                return res.status(500).json({

                    success: false,

                    message: "Database Error"

                });

            }

            if (result.affectedRows === 0) {

                return res.status(404).json({

                    success: false,

                    message: "Product Not Found"

                });

            }

            res.json({

                success: true,

                message: "Product Deleted Successfully"

            });

        }

    );

};

export const getAllOrders = (req, res) => {

    const {

        search,

        status,

        payment,

        dateFilter,

        fromDate,

        toDate

    } = req.query;

    let sql = `

        SELECT

            orders.id,

            users.name,

            orders.total_amount,

            orders.payment_status,

            orders.order_status,

            orders.created_at

        FROM orders

        LEFT JOIN users

            ON orders.firebase_uid = users.firebase_uid

        WHERE 1 = 1

    `;

    const values = [];

    if (search) {

        sql += `

            AND users.name LIKE ?

        `;

        values.push(`%${search}%`);

    }

    if (status && status !== "All") {

        sql += `

            AND orders.order_status = ?

        `;

        values.push(status);

    }

    if (payment && payment !== "All") {

        sql += `

            AND orders.payment_status = ?

        `;

        values.push(payment);

    }
    if (dateFilter === "Today") {

        sql += `
        AND DATE(orders.created_at) = CURDATE()
    `;

    }

    else if (dateFilter === "Yesterday") {

        sql += `
        AND DATE(orders.created_at) = CURDATE() - INTERVAL 1 DAY
    `;

    }

    else if (dateFilter === "Last7Days") {

        sql += `
        AND orders.created_at >= CURDATE() - INTERVAL 7 DAY
    `;

    }

    else if (dateFilter === "ThisMonth") {

        sql += `
        AND MONTH(orders.created_at) = MONTH(CURDATE())
        AND YEAR(orders.created_at) = YEAR(CURDATE())
    `;

    }

    else if (dateFilter === "Custom") {

        if (fromDate && toDate) {

            sql += `
            AND DATE(orders.created_at) BETWEEN ? AND ?
        `;

            values.push(fromDate, toDate);

        }

        else if (fromDate) {

            sql += `
            AND DATE(orders.created_at) >= ?
        `;

            values.push(fromDate);

        }

        else if (toDate) {

            sql += `
            AND DATE(orders.created_at) <= ?
        `;

            values.push(toDate);

        }

    }

    sql += `

        ORDER BY orders.created_at DESC

    `;

    db.query(sql, values, (err, result) => {

        if (err) {

            console.error(err);

            return res.status(500).json({

                success: false,

                message: "Database Error"

            });

        }

        res.json(result);

    });

};

export const getOrderDetails = (req, res) => {

    const { id } = req.params;

    const orderSql = `

        SELECT

            orders.id,

            orders.total_amount,

            orders.payment_status,

            orders.order_status,

            orders.created_at,

            users.name,

            users.email,

            addresses.full_name,

            addresses.phone,

            addresses.address_line1,

            addresses.address_line2,

            addresses.city,

            addresses.state,

            addresses.postal_code,

            addresses.country

        FROM orders

        JOIN users

            ON orders.firebase_uid = users.firebase_uid

        JOIN addresses

            ON orders.address_id = addresses.id

        WHERE orders.id = ?

    `;

    db.query(orderSql, [id], (err, orderResult) => {

        if (err) {

            console.error(err);

            return res.status(500).json({

                success: false,

                message: "Database Error"

            });

        }

        if (orderResult.length === 0) {

            return res.status(404).json({

                success: false,

                message: "Order Not Found"

            });

        }

        const itemsSql = `

            SELECT

                order_items.product_id,

                order_items.quantity,

                order_items.price,

                products.name,

                products.image

            FROM order_items

            JOIN products

                ON order_items.product_id = products.id

            WHERE order_items.order_id = ?

        `;

        db.query(itemsSql, [id], (err, itemsResult) => {

            if (err) {

                console.error(err);

                return res.status(500).json({

                    success: false,

                    message: "Database Error"

                });

            }

            res.json({

                order: orderResult[0],

                items: itemsResult

            });

        });

    });

};

export const updateOrderStatus = (req, res) => {

    const { id } = req.params;

    const { order_status } = req.body;

    const sql = `

        UPDATE orders

        SET order_status = ?

        WHERE id = ?

    `;

    db.query(

        sql,

        [order_status, id],

        (err, result) => {

            if (err) {

                console.error(err);

                return res.status(500).json({

                    success: false,

                    message: "Database Error"

                });

            }

            if (result.affectedRows === 0) {

                return res.status(404).json({

                    success: false,

                    message: "Order Not Found"

                });

            }

            res.json({

                success: true,

                message: "Order Status Updated Successfully"

            });

        }

    );

};

export const getAllUsers = (req, res) => {

    const sql = `

        SELECT

            id,
            name,
            email,
            provider,
            created_at

        FROM users

        ORDER BY created_at DESC

    `;

    db.query(sql, (err, result) => {

        if (err) {

            console.error(err);

            return res.status(500).json({

                success: false,
                message: "Database Error"

            });

        }

        res.json(result);

    });

};

export const getDashboardStats = (req, res) => {

    const sql = `
        SELECT
            (SELECT COUNT(*) FROM users) AS totalUsers,
            (SELECT COUNT(*) FROM products) AS totalProducts,
            (SELECT COUNT(*) FROM orders) AS totalOrders,
            (SELECT IFNULL(SUM(total_amount),0)
                FROM orders
                WHERE payment_status='Paid') AS totalRevenue,
            (SELECT COUNT(*)
                FROM orders
                WHERE order_status='Placed') AS pendingOrders,
            (SELECT COUNT(*)
                FROM orders
                WHERE order_status='Delivered') AS deliveredOrders
    `;

    db.query(sql, (err, result) => {

        if (err) {
            console.error(err);
            return res.status(500).json({
                success: false,
                message: "Database Error"
            });
        }

        res.json(result[0]);

    });

};
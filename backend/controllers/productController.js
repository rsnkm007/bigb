import db from "../config/db.js";

export const getProducts = (req, res) => {

    const { search } = req.query;

    let sql = `
        SELECT *
        FROM products
    `;

    const values = [];

    if (search) {

        sql += `
            WHERE
                name LIKE ?
                OR category LIKE ?
                OR company LIKE ?
        `;

        values.push(
            `%${search}%`,
            `%${search}%`,
            `%${search}%`
        );

    }

    sql += " ORDER BY id DESC";

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
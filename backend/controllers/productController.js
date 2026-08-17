import db from "../config/db.js";

export const getProducts = (req, res) => {

    const {

        search,

        category,

        company,

        featured

    } = req.query;

    let sql = `

        SELECT *

        FROM products

        WHERE 1 = 1

    `;

    const values = [];

    if (search) {

        sql += `
            AND (
                name LIKE ?
                OR category LIKE ?
                OR company LIKE ?
            )
        `;

        values.push(

            `%${search}%`,
            `%${search}%`,
            `%${search}%`

        );

    }

    if (category && category !== "All") {

        sql += `
            AND category = ?
        `;

        values.push(category);

    }

    if (company && company !== "All") {

        sql += `
            AND company = ?
        `;

        values.push(company);

    }

    if (featured && featured !== "All") {

        sql += `
            AND featured = ?
        `;

        values.push(featured === "Yes" ? 1 : 0);

    }

    sql += `
        ORDER BY id DESC
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

export const getProductFilters = (req, res) => {

    const sql = `

        SELECT

            DISTINCT category,

            company

        FROM products

        ORDER BY category, company

    `;

    db.query(sql, (err, result) => {

        if (err) {

            console.error(err);

            return res.status(500).json({

                success: false,

                message: "Database Error"

            });

        }

        const categories = [

            ...new Set(

                result.map(item => item.category)

            )

        ];

        const companies = [

            ...new Set(

                result.map(item => item.company)

            )

        ];

        res.json({

            categories,

            companies

        });

    });

};
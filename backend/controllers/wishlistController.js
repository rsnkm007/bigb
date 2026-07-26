import db from "../config/db.js";

export const addToWishlist = (req, res) => {

    const {

        firebase_uid,

        product_id

    } = req.body;

    const sql = `

        INSERT INTO wishlist
        (
            firebase_uid,
            product_id
        )

        VALUES (?, ?)

        ON DUPLICATE KEY UPDATE

        product_id = VALUES(product_id)

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

                    message: "Error adding to wishlist"

                });

            }

            res.status(200).json({

                message: "Added to wishlist"

            });

        }

    );

};

export const getWishlist = (req, res) => {

    const { firebase_uid } = req.params;

    const sql = `

        SELECT

            products.*

        FROM wishlist

        INNER JOIN products

        ON wishlist.product_id = products.id

        WHERE wishlist.firebase_uid = ?

    `;

    db.query(

        sql,

        [firebase_uid],

        (err, results) => {

            if (err) {

                console.error(err);

                return res.status(500).json({

                    message: "Error fetching wishlist"

                });

            }

            res.json(results);

        }

    );

};

export const removeFromWishlist = (req, res) => {

    const {

        firebase_uid,

        product_id

    } = req.params;

    const sql = `

        DELETE FROM wishlist

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

                    message: "Error removing wishlist item"

                });

            }

            res.json({

                message: "Removed successfully"

            });

        }

    );

};
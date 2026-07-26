import db from "../config/db.js";

// Add Address

export const addAddress = (req, res) => {

    const {

        firebase_uid,
        full_name,
        phone,
        address_line1,
        address_line2,
        city,
        state,
        postal_code,
        country,
        is_default

    } = req.body;

    const sql = `

        INSERT INTO addresses (

            firebase_uid,
            full_name,
            phone,
            address_line1,
            address_line2,
            city,
            state,
            postal_code,
            country,
            is_default

        )

        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)

    `;

    db.query(

        sql,

        [

            firebase_uid,
            full_name,
            phone,
            address_line1,
            address_line2,
            city,
            state,
            postal_code,
            country,
            is_default

        ],

        (err) => {

            if (err) {

                console.error(err);

                return res.status(500).json({

                    message: "Error adding address"

                });

            }

            res.json({

                message: "Address added successfully"

            });

        }

    );

};

// Get Addresses

export const getAddresses = (req, res) => {

    const {

        firebase_uid

    } = req.params;

    const sql = `

        SELECT *

        FROM addresses

        WHERE firebase_uid = ?

        ORDER BY is_default DESC, id DESC

    `;

    db.query(

        sql,

        [

            firebase_uid

        ],

        (err, results) => {

            if (err) {

                console.error(err);

                return res.status(500).json({

                    message: "Error fetching addresses"

                });

            }

            res.json(results);

        }

    );

};

// Update Address

export const updateAddress = (req, res) => {

    const {

        id

    } = req.params;

    const {

        full_name,
        phone,
        address_line1,
        address_line2,
        city,
        state,
        postal_code,
        country,
        is_default

    } = req.body;

    const sql = `

        UPDATE addresses

        SET

            full_name=?,
            phone=?,
            address_line1=?,
            address_line2=?,
            city=?,
            state=?,
            postal_code=?,
            country=?,
            is_default=?

        WHERE id=?

    `;

    db.query(

        sql,

        [

            full_name,
            phone,
            address_line1,
            address_line2,
            city,
            state,
            postal_code,
            country,
            is_default,
            id

        ],

        (err) => {

            if (err) {

                console.error(err);

                return res.status(500).json({

                    message: "Error updating address"

                });

            }

            res.json({

                message: "Address updated"

            });

        }

    );

};

// Delete Address

export const deleteAddress = (req, res) => {

    const {

        id

    } = req.params;

    const sql = `

        DELETE FROM addresses

        WHERE id=?

    `;

    db.query(

        sql,

        [

            id

        ],

        (err) => {

            if (err) {

                console.error(err);

                return res.status(500).json({

                    message: "Error deleting address"

                });

            }

            res.json({

                message: "Address deleted"

            });

        }

    );

};
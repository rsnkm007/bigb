import db from "../config/db.js";

export const saveUser = (req, res) => {

  const {
    firebase_uid,
    name,
    email,
    profile_image,
    provider
  } = req.body;

  const sql = `
        INSERT INTO users
        (
            firebase_uid,
            name,
            email,
            profile_image,
            provider
        )
        VALUES (?, ?, ?, ?, ?)

        ON DUPLICATE KEY UPDATE

            name = VALUES(name),
            email = VALUES(email),
            profile_image = VALUES(profile_image),
            provider = VALUES(provider)
    `;

  db.query(
    sql,
    [
      firebase_uid,
      name,
      email,
      profile_image,
      provider
    ],
    (err, result) => {

      if (err) {

        console.error(err);

        return res.status(500).json({
          message: "Error saving user"
        });

      }

      res.status(200).json({
    message: "User saved successfully",
    result
});

    }
  );

};
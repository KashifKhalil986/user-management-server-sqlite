const db = require("../database");

function searchUsers(query, callback) {
  db.all(
    "SELECT * FROM users WHERE name LIKE ?",
    [query],
    (err, rows) => {
      callback(err, rows);
    }
  );
}

module.exports = { searchUsers };

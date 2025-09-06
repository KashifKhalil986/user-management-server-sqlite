const db = require("../database");

exports.getUsers = (search, callback) => {
  let query = "SELECT * FROM users";
  let params = [];

  if (search) {
    query += " WHERE name LIKE ?";
    params.push(`%${search}%`);
  }

  db.all(query, params, (err, rows) => {
    callback(err, rows);
  });
};

exports.addUser = (user, callback) => {
  const { name, email } = user;
  const query = "INSERT INTO users (name, email) VALUES (?, ?)";
  db.run(query, [name, email], function (err) {
    callback(err, { id: this.lastID, name, email });
  });
};

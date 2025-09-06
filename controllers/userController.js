const User = require("../models/userModel");

const searchUsers = (req, res) => {
  const query = req.query.q || "";
  User.searchUsers(query, (err, users) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(users);
  });
};

module.exports = { searchUsers };

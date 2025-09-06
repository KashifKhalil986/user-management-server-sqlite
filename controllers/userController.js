const User = require("../models/userModel");

exports.getUsers = (req, res) => {
  const search = req.query.q || "";
  User.getUsers(search, (err, users) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(users);
  });
};


exports.addUser = (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required" });
  }

  User.addUser({ name, email }, (err, newUser) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json(newUser);
  });
};

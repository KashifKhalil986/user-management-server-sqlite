const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./mydb.sqlite", (err) => {
  if (err) console.error("DB connection error:", err);
  else console.log("Connected to SQLite");
});

module.exports = db;

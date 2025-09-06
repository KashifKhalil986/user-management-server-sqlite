const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoute");

const app = express();
app.use(cors());

app.use("/", userRoutes);

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});

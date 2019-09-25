require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connect");

const userRoutes = require("./routes/user-routes");

connectDB();

app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 3000;

app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`);
});

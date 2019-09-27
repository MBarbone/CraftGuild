require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connect");

const userRoutes = require("./routes/user-routes");
const authRoutes = require("./routes/login-routes");
const favoriteRoutes = require("./routes/favorite-routes");

connectDB();

app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 3000;

app.use("/register", userRoutes);
app.use("/login", authRoutes);
app.use("/favorites", favoriteRoutes);

app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`);
});

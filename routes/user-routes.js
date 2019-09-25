const express = require("express");
const router = express.Router();
const jwt = "jsonwebtoken";
const bcrypt = require("bcryptjs");
const User = require("../models/User");

router.post("/", async (req, res) => {
  const { name, age, email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res
        .status(400)
        .json({ errors: [{ msg: "User already exists." }] });
    }

    if (age < 21) {
      return res.status(400).json({
        errors: [
          { msg: "You must be 21 years old or older to make an account." }
        ]
      });
    }

    user = new User({
      name,
      age,
      email,
      password
    });

    await user.save();

    res.json("user saved");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;

const express = require("express");
require("dotenv").config();
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

    // create salt for hashing - 10 rounds
    const salt = await bcrypt.genSalt(10);
    // assign password as now hashed password
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const payload = {
      user: {
        id: user.id
      }
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 36000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );

    res.json("user saved");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;

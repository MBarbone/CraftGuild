const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const User = require("../models/User");

// private
// get user favorited
router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (user.favorited.length === 0) {
      return res
        .status(400)
        .json({ msg: "You have not favorited any breweries yet." });
    }

    res.json(user.favorited);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// private
// like brewery
router.patch("/add", auth, async (req, res) => {
  try {
    let user = await User.findByIdAndUpdate(req.user.id);

    user.favorited.push(req.body);

    // Add brewery to top of hearted array, only if it is unique

    //   { $and: [{ _id: req.user._id }, { favorited: { $ne: req.body } }] },
    //   { $push: { favorited: { $each: [req.body], $position: 0 } } }
    await user.save();

    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

module.exports = router;

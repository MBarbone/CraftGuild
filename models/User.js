const mongoose = require("mongoose");
const validator = require("validator");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    validate(value) {
      if (validator.isEmpty(value)) {
        throw new Error("Name is required.");
      }
    }
  },

  age: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isNumeric(value)) {
        throw new Error("Age must be a number.");
      }

      if (value < 21) {
        throw new Error("Must be 21 years old or older to make an account.");
      }

      if (validator.isEmpty(value)) {
        throw new Error("Age is required.");
      }
    }
  },

  email: {
    type: String,
    unique: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid.");
      }
      if (validator.isEmpty(value)) {
        throw new Error("Email is required.");
      }
    }
  },

  password: {
    type: String,
    minlength: 7,
    trim: true,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error("Passwords cannot include the word 'password'");
      }
      if (validator.isEmpty(value)) {
        throw new Error("Password is required.");
      }
    }
  },

  favorited: {
    type: [Object]
  }
});

module.exports = User = mongoose.model("user", UserSchema);

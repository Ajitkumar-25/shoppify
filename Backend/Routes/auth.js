const express = require("express");
const router = express.Router();
const User = require("../Models/User");
const jwt = require("jsonwebtoken");

//signup route

router.post("/register", async (req, resp) => {
  try {
    const { name, email, password } = req.body;

    // Validate request body
    if (!name || !email || !password) {
      return resp
        .status(400)
        .json({ error: "Name, email, and password are required" });
    }

    // Check if the user already exists
    let user = await User.findOne({ email });
    if (user) {
      return resp.status(400).json({ error: "User already exists" });
    }

    // Initialize cart data
    let cart = {};
    for (let i = 0; i < 300; i++) {
      cart[i] = 0;
    }

    // Create a new user
    user = new User({
      name,
      email,
      password,
      cartData: cart,
    });

    // Save the user to the database
    await user.save();

    // Create JWT token
    const data = {
      user: {
        id: user.id,
      },
    };
    const token = jwt.sign(data, "secret_ecom");

    // Send response
    resp.json({ success: true, token });
  } catch (err) {
    console.log(err);
    resp.status(500).send("Internal Server Error");
  }
});

//login route

router.post("/login", async (req, resp) => {
  let user = await User.findOne({ email: req.body.email });
  if (!user) {
    return resp.status(400).json({ error: "Invalid credentials" });
  }
  if (req.body.password === user.password) {
    const data = {
      user: {
        id: user.id,
      },
    };
    const token = jwt.sign(data, "secret_ecom");
    return resp.json({ success: true, token });
  } else {
    return resp.status(400).json({ error: "Invalid credentials" });
  }
});

module.exports = router;

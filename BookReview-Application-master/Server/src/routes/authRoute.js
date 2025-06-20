const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");

// REGISTER
router.post("/register", authController.registerUser);

// LOGIN
router.post("/login", authController.loginUser);

// LOGOUT
router.get("/logout", authController.logoutUser);

module.exports = router;

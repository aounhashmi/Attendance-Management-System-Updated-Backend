const express = require("express");
const {
  signup,
  login,
  getAllTeachers,
} = require("../controllers/user.controller");

const router = express.Router();

// Register Teacher & Login
router.post("/register", signup).post("/login", login);

// Get All Teachers
router.get("/getAllTeachers", getAllTeachers);

module.exports = router;

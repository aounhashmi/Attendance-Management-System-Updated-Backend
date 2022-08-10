const express = require("express");
const {
  addAttendance,
  getPresentStudents,
} = require("../controllers/attendance.controller");
const { verifyToken } = require("../controllers/user.controller");
const router = express.Router();

// Add Attendance & Get Attendance by Date
router.post("/add", addAttendance).post("/getPresent", getPresentStudents);

module.exports = router;

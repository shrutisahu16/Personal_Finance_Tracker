const express = require("express");
const router = express.Router();

const auth = require("../middlewares/authMiddleware");

const { getDashboardData } = require("../controllers/reportController");
const { getMonthlyReports } = require("../controllers/reportController");

router.get("/history", auth, getMonthlyReports);
router.get("/dashboard", auth, getDashboardData);

module.exports = router;
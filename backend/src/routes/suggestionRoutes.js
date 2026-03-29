const express = require("express");
const router = express.Router();

const auth = require("../middlewares/authMiddleware");
const { fetchSuggestions } = require("../controllers/suggestionController");

router.get("/", auth, fetchSuggestions);

module.exports = router;
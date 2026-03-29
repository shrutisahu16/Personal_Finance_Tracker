const mongoose = require("mongoose");

const budgetSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  category: String,
  limit: Number,
  month: String, // "2026-03"
});

module.exports = mongoose.model("Budget", budgetSchema);
const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    amount: Number,
    category: String,
    date: Date,
    paymentMethod: String,
    notes: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Expense", expenseSchema);
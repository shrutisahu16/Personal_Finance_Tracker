const Budget = require("../models/Budget");
const Expense = require("../models/Expense");

// ➕ Set Budget
exports.setBudget = async (req, res) => {
  try {
    const { category, limit, month } = req.body;

    const budget = await Budget.findOneAndUpdate(
      { user: req.user, category, month },
      { limit },
      { upsert: true, new: true }
    );

    res.json(budget);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 📊 Get Budgets + Alerts
exports.getBudgets = async (req, res) => {
  try {
    const budgets = await Budget.find({ user: req.user });

    const result = [];

    for (let b of budgets) {
      const expenses = await Expense.find({
        user: req.user,
        category: b.category,
      });

      const total = expenses.reduce((sum, e) => sum + e.amount, 0);

      let status = "safe";

      if (total >= b.limit) status = "exceeded";
      else if (total >= 0.8 * b.limit) status = "warning";

      result.push({
        ...b._doc,
        spent: total,
        status,
      });
    }

    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
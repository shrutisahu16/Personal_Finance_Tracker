// const Expense = require("../models/Expense");
// const { getSuggestions } = require("../services/pythonService");

// exports.fetchSuggestions = async (req, res) => {
//   try {
//     const expenses = await Expense.find({ user: req.user });

//     const data = expenses.map((e) => ({
//       amount: e.amount,
//       category: e.category,
//       date: e.date,
//     }));

//     const result = await getSuggestions(data);

//     res.json(result);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
const Expense = require("../models/Expense");
const { getSuggestions } = require("../services/pythonService");

exports.fetchSuggestions = async (req, res) => {
  try {
    const last30Days = new Date();
    last30Days.setDate(last30Days.getDate() - 30);

    const expenses = await Expense.find({
      user: req.user,
      date: { $gte: last30Days },
    });

    const data = expenses.map((e) => ({
      amount: e.amount,
      category: e.category,
      date: e.date,
    }));

    const result = await getSuggestions(data);

    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
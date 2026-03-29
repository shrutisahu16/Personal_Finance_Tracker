// const Expense = require("../models/Expense");

// // 📊 Dashboard Analytics
// exports.getDashboardData = async (req, res) => {
//   try {
//     const userId = req.user;

//     const currentMonth = new Date().toISOString().slice(0, 7);

//     const expenses = await Expense.find({
//       user: userId,
//     });

//     // 🔹 Total spent
//     const totalSpent = expenses.reduce((sum, e) => sum + e.amount, 0);

//     // 🔹 Category-wise
//     const categoryMap = {};
//     expenses.forEach((e) => {
//       categoryMap[e.category] =
//         (categoryMap[e.category] || 0) + e.amount;
//     });

//     const topCategory = Object.entries(categoryMap).sort(
//       (a, b) => b[1] - a[1]
//     )[0];

//     // 🔹 Payment methods
//     const paymentMap = {};
//     expenses.forEach((e) => {
//       paymentMap[e.paymentMethod] =
//         (paymentMap[e.paymentMethod] || 0) + 1;
//     });

//     const topPayments = Object.entries(paymentMap)
//       .sort((a, b) => b[1] - a[1])
//       .slice(0, 3);

//     // 🔹 Daily trend
//     const trendMap = {};
//     expenses.forEach((e) => {
//       const day = e.date.toISOString().slice(0, 10);
//       trendMap[day] = (trendMap[day] || 0) + e.amount;
//     });

//     res.json({
//       totalSpent,
//       topCategory,
//       topPayments,
//       categoryMap,
//       trendMap,
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

const Expense = require("../models/Expense");
const { saveReport } = require("../services/reportService");
const { getReports } = require("../services/reportService");

// 📊 Dashboard Analytics
exports.getDashboardData = async (req, res) => {
  try {
    const userId = req.user;

    const expenses = await Expense.find({ user: userId });

    // 🔹 Total spent
    const totalSpent = expenses.reduce((sum, e) => sum + e.amount, 0);

    // 🔹 Category-wise
    const categoryMap = {};
    expenses.forEach((e) => {
      categoryMap[e.category] =
        (categoryMap[e.category] || 0) + e.amount;
    });

    const topCategory = Object.entries(categoryMap).sort(
      (a, b) => b[1] - a[1]
    )[0];

    // 🔹 Payment methods
    const paymentMap = {};
    expenses.forEach((e) => {
      paymentMap[e.paymentMethod] =
        (paymentMap[e.paymentMethod] || 0) + 1;
    });

    const topPayments = Object.entries(paymentMap)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3);

    // 🔹 Trend
    const trendMap = {};
    expenses.forEach((e) => {
      const day = new Date(e.date).toISOString().slice(0, 10);
      trendMap[day] = (trendMap[day] || 0) + e.amount;
    });

    // ✅ SAVE TO POSTGRES
    // await saveReport(userId, totalSpent);
  await saveReport(userId, totalSpent, topCategory?.[0]);
    res.json({
      totalSpent,
      topCategory,
      topPayments,
      categoryMap,
      trendMap,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};


// exports.getMonthlyReports = async (req, res) => {
//   try {
//     const data = await getReports(req.user);
//     res.json(data);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
exports.getMonthlyReports = async (req, res) => {
  try {
    const reports = await getReports(req.user);

    res.json({
      count: reports.length,
      reports,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
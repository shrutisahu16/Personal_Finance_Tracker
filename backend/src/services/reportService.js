// const pool = require("../config/sqlDb");

// exports.saveReport = async (userId, total) => {
//   try {
//     await pool.query(
//       "INSERT INTO reports (user_id, total_spent) VALUES ($1, $2)",
//       [userId, total]
//     );
//   } catch (error) {
//     console.error("Postgres error:", error.message);
//   }
// };

const pool = require("../config/sqlDb");

// exports.saveReport = async (userId, total, topCategory) => {
//   try {
//     const month = new Date().toISOString().slice(0, 7);

//     await pool.query(
//       "INSERT INTO reports (user_id, month, total_spent, top_category) VALUES ($1, $2, $3, $4)",
//       [userId, month, total, topCategory]
//     );
//   } catch (error) {
//     console.error("Postgres error:", error.message);
//   }
// };
// exports.saveReport = async (userId, total, topCategory) => {
//   try {
//     const month = new Date().toISOString().slice(0, 7);

//     // check if already exists
//     const existing = await pool.query(
//       "SELECT * FROM reports WHERE user_id = $1 AND month = $2",
//       [userId, month]
//     );

//     if (existing.rows.length > 0) {
//       // update instead of insert
//       await pool.query(
//         `
//         UPDATE reports
//         SET total_spent = $1, top_category = $2, created_at = CURRENT_TIMESTAMP
//         WHERE user_id = $3 AND month = $4
//         `,
//         [total, topCategory, userId, month]
//       );
//     } else {
//       // insert new
//       await pool.query(
//         `
//         INSERT INTO reports (user_id, month, total_spent, top_category)
//         VALUES ($1, $2, $3, $4)
//         `,
//         [userId, month, total, topCategory]
//       );
//     }
//   } catch (error) {
//     console.error("Postgres error:", error.message);
//   }
// };
exports.saveReport = async (userId, total, topCategory) => {
  try {
    const month = new Date().toISOString().slice(0, 7);

    // check if report already exists
    const existing = await pool.query(
      "SELECT * FROM reports WHERE user_id = $1 AND month = $2",
      [userId, month]
    );

    if (existing.rows.length > 0) {
      // UPDATE instead of insert
      await pool.query(
        `
        UPDATE reports
        SET total_spent = $1,
            top_category = $2,
            created_at = CURRENT_TIMESTAMP
        WHERE user_id = $3 AND month = $4
        `,
        [total, topCategory, userId, month]
      );
    } else {
      // INSERT new
      await pool.query(
        `
        INSERT INTO reports (user_id, month, total_spent, top_category)
        VALUES ($1, $2, $3, $4)
        `,
        [userId, month, total, topCategory]
      );
    }
  } catch (error) {
    console.error("Postgres error:", error.message);
  }
};
// 🔹 Get last 3 months reports
// exports.getReports = async (userId) => {
//   try {
//     const result = await pool.query(
//       `
//       SELECT DISTINCT ON (month)
//         id,
//         user_id,
//         month,
//         total_spent,
//         top_category,
//         created_at
//       FROM reports
//       WHERE user_id = $1
//       ORDER BY month DESC, created_at DESC
//       LIMIT 3;
//       `,
//       [userId]
//     );

//     return result.rows;
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// };
exports.getReports = async (userId) => {
  try {
    const result = await pool.query(
      `
      SELECT DISTINCT ON (month)
        id,
        month,
        total_spent,
        top_category
      FROM reports
      WHERE user_id = $1
      ORDER BY month DESC, created_at DESC
      LIMIT 3;
      `,
      [userId]
    );

    return result.rows;
  } catch (error) {
    console.error(error);
    return [];
  }
};
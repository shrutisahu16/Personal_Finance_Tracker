// const axios = require("axios");

// exports.getSuggestions = async (expenses) => {
//   const res = await axios.post("http://127.0.0.1:8000/suggestions", expenses);
//   return res.data;
// };
const axios = require("axios");

exports.getSuggestions = async (expenses) => {
  try {
    const res = await axios.post(
      "http://localhost:8000/suggestions",
      expenses
    );

    return res.data;
  } catch (error) {
    console.error("Python service error:", error.message);

    return {
      suggestions: ["⚠️ Unable to fetch AI suggestions"],
    };
  }
};
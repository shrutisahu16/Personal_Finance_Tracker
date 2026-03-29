import API_URL from "./api";

// ✅ Dashboard API
export const getDashboard = async () => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API_URL}/reports/dashboard`, {
    headers: {
      Authorization: token || "",
    },
  });

  return res.json();
};

// ✅ Suggestions API (ADD THIS)
// export const getSuggestions = async () => {
//   const token = localStorage.getItem("token");

//   const res = await fetch(`${API_URL}/suggestions`, {
//     headers: {
//       Authorization: token || "",
//     },
//   });

//   return res.json();
// };

// export const getReportHistory = async () => {
//   const token = localStorage.getItem("token");

//   const res = await fetch(`${API_URL}/reports/history`, {
//     headers: {
//       Authorization: token || "",
//     },
//   });

//   return res.json();
// };
export const getSuggestions = async () => {
  try {
    const token = localStorage.getItem("token");

    const res = await fetch(`${API_URL}/suggestions`, {
      headers: {
        Authorization: token || "",
      },
    });

    return await res.json();
  } catch (error) {
    console.error(error);
    return { suggestions: [] };
  }
};

export const getReportHistory = async () => {
  try {
    const token = localStorage.getItem("token");

    const res = await fetch(`${API_URL}/reports/history`, {
      headers: {
        Authorization: token || "",
      },
    });

    return await res.json();
  } catch (error) {
    console.error(error);
    return { reports: [] };
  }
};
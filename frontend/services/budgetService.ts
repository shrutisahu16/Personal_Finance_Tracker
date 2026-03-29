import API_URL from "./api";

export const setBudget = async (data: any) => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API_URL}/budgets`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token || "",
    },
    body: JSON.stringify(data),
  });

  return res.json();
};

export const getBudgets = async () => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API_URL}/budgets`, {
    headers: {
      Authorization: token || "",
    },
  });

  return res.json();
};
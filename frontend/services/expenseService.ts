import API_URL from "./api";

// GET
export const getExpenses = async () => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API_URL}/expenses`, {
    headers: {
      Authorization: token || "",
    },
  });

  return res.json();
};

// ADD
export const addExpense = async (data: any) => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API_URL}/expenses`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token || "",
    },
    body: JSON.stringify(data),
  });

  return res.json();
};

// UPDATE
export const updateExpense = async (id: string, data: any) => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API_URL}/expenses/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: token || "",
    },
    body: JSON.stringify(data),
  });

  return res.json();
};

// DELETE
export const deleteExpense = async (id: string) => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API_URL}/expenses/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: token || "",
    },
  });

  return res.json();
};
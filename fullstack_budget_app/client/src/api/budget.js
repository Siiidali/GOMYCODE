import axios from "axios";

const budgetApi = axios.create({
  baseURL: "http://localhost:4000/api",
});

export const getAllBudgets = async () => {
  const data = await budgetApi.get("/budget");
  console.log(data);
  return data.data;
};

export const getOneBudget = async (id) => {
  const data = await budgetApi.get(`/budget/${id}`);
  return data.data;
};

export const createBudget = async (budget) => {
  const data = await budgetApi.post("/budget", { ...budget });
  return data.data;
};

export const deleteBudget = async (id) => {
  const data = await budgetApi.delete(`/budget/${id}`);
  return data.data;
};

export const getExpensesForBudget = async (budgetId) => {
  const data = await budgetApi.get(`/budget/${budgetId}/expenses`);
  return data.data;
};

export const createExpenseForBudget = async (budgetId, expense) => {
  const data = await budgetApi.post(`/budget/${budgetId}/expenses`, {
    ...expense,
  });
  return data.data;
};

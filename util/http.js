import axios from "axios";

const BACKEND_URL = "https://expense-tracker-26468-default-rtdb.firebaseio.com";
export async function storeExpense(expenseData) {
  const response = await axios.post(
    BACKEND_URL + "/expenses.json",
    expenseData
  );
  const id = response.data.name;
  return id;
}

export async function getExpenses() {
  const respone = await axios.get(BACKEND_URL + "/expenses.json");
  const expenses = [];

  for (const key in respone.data) {
    const expenseObj = {
      id: key,
      amount: respone.data[key].amount,
      date: new Date(respone.data[key].date),
      description: respone.data[key].description,
    };

    expenses.push(expenseObj);
  }
  return expenses;
}

export function updateExpense(id, expenseData) {
  return axios.put(BACKEND_URL + `./expenses/${id}.json`, expenseData);
}

export function deleteExpense(id) {
  return axios.delete(BACKEND_URL + `./expenses/${id}.json`);
}

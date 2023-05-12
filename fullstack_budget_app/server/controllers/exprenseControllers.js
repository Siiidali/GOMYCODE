import { Budget } from "../models/budgetModel.js";
import { Expense } from "../models/exprenseModel.js";

export const getAllExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find();
    if (!expenses || !expenses.length) {
      return res
        .status(404)
        .json({ error: true, message: "There is no Expenses" });
    }
    res.status(200).json({ success: true, expenses: expenses });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
export const deleteExpense = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "The provided id is not valid" });
  }
  try {
    const expense = await Budget.findById(id);
    if (!expense) {
      return res.status(400).json({ error: "No such a expense" });
    }
    const deletedExpense = await Expense.findByIdAndDelete(id);
    if (!deleteExpense) {
      res.status(400).json({ error: "The expense didn't been deleted" });
    }
    res.status(200).json({ succes: true, expense: deleteExpense });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

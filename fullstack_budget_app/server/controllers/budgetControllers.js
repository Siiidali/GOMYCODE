import { Budget } from "../models/budgetModel.js";
import { Expense } from "../models/exprenseModel.js";

export const getAllBudgets = async (req, res) => {
  try {
    const budgets = await Budget.find();
    if (!budgets || !budgets.length) {
      return res
        .status(404)
        .json({ error: true, message: "There is no Budget" });
    }
    res.status(200).json({ success: true, budgets: budgets });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
export const getOneBudget = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "The provided id is not valid" });
  }
  try {
    const budget = await Budget.findById(id);
    if (!budget) {
      return res.status(400).json({ error: "No such a budget" });
    }
    res.status(200).json({ succes: true, budget: budget });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
export const createBudget = async (req, res) => {
  const budget = req.body;
  try {
    if (!budget.name || !budget.amount) {
      return res.status(400).json({ error: "please enter all the fileds" });
    }
    const searchBudgets = await Budget.find({ name: budget.name });
    if (searchBudgets && searchBudgets.length) {
      return res.status(400).json({ error: "budget already existed" });
    }
    const createdBudget = await Budget.create(budget);
    res.status(201).json({ success: true, budget: createdBudget });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
export const deleteBudget = async (req, res) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "The provided id is not valid" });
  }
  try {
    const budget = await Budget.findById(id);
    if (!budget) {
      return res.status(400).json({ error: "the budget doesn't exist" });
    }
    const theExpensesBudget = Expense.find({ budgetId: id });
    theExpensesBudget.forEach((expense) => {
      const deletedExpense = Expense.findByIdAndDelete(expense._id);
      if (!deletedExpense) {
        return res.json({ error: "There was an error" });
      }
    });
    const deletedBudget = await Budget.findByIdAndDelete(id);
    if (!deletedBudget) {
      return res.json({ error: "The budget didin't be deleted" });
    }
    res.status(200).json({ success: true, deletedBudget: deletedBudget });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
export const getAllExpensesForBudget = async (req, res) => {
  const { budgetId } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "The provided id is not valid" });
  }
  try {
    const expenses = Expense.find({ budgetId: budgetId });
    if (!expenses || !expenses.length) {
      return res
        .status(404)
        .json({ error: true, message: "There is no Expenses for that budget" });
    }
    res.status(200).json({ success: true, expenses: expenses });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
export const createOneExpenseForBudget = async (req, res) => {
  const expense = req.body;
  const { budgetId } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "The provided id is not valid" });
  }
  try {
    if (!expense.name || !expense.amount) {
      return res.status(400).json({ error: "please enter all the fileds" });
    }

    const createdExpense = await Expense.create({
      name: expense.name,
      amount: expense.amount,
      budgetId: budgetId,
    });
    res.status(201).json({ success: true, expense: createdExpense });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

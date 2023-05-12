import mongoose from "mongoose";

const expenseSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  budgetId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Budget",
  },
});

export const Expense = mongoose.model("expense", expenseSchema);

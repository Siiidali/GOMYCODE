import mongoose from "mongoose";

const budgetSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});

export const Budget = mongoose.model("budget", budgetSchema);

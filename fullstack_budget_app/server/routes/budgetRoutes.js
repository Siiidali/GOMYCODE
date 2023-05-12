import { Router } from "express";
import {
  getAllBudgets,
  getOneBudget,
  deleteBudget,
  getAllExpensesForBudget,
  createBudget,
  createOneExpenseForBudget,
} from "../controllers/budgetControllers.js";
const router = Router();

router.get("/", getAllBudgets);
router.get("/:id", getOneBudget);
router.post("/", createBudget);
router.delete("/:id", deleteBudget);
router.get("/:budgetId/expenses", getAllExpensesForBudget);
router.post("/:budgetId/expenses", createOneExpenseForBudget);

export default router;

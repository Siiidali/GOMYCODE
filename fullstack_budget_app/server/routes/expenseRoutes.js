import { Router } from "express";
import {
  getAllExpenses,
  deleteExpense,
} from "../controllers/exprenseControllers.js";
const router = Router();

router.get("/", getAllExpenses);
router.delete("/:id", deleteExpense);

export default router;

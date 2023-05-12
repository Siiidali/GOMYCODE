import { Router } from "express";
import { signUp, logIn } from "../controllers/authControllers.js";

const router = Router();

router.post("/signUp", signUp);
router.post("/login", logIn);

export default router;

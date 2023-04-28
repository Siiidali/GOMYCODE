const express = require("express");
const authControllers = require("../controllers/authControllers");

const router = express.Router();

router.post("/login", authControllers.login);
router.post("/sign-up", authControllers.signUp);
router.post("/logout", authControllers.logout);

module.exports = router;

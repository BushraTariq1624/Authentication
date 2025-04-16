import express from "express";
const router = express.Router();
import tokenVerification from "../Middleware/tokenVerification.mjs";
import { createUser, login, isAdmin } from "../controller/userController.mjs";


router.post("/user", createUser);
router.post("/user/login", login);
router.get('/isAdmin', tokenVerification, isAdmin);

export default router;
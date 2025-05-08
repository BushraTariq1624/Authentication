import express from "express";
const router = express.Router();
import tokenVerification from "../Middleware/tokenVerification.mjs";
import { createUser, login, getLoggedInUser} from "../controller/userController.mjs";


router.post("/user", createUser);
router.post("/user/login", login);
router.get("/user/me", tokenVerification, getLoggedInUser); 

export default router;
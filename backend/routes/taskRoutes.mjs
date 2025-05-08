import express from "express";
import tokenVerification from "../Middleware/tokenVerification.mjs";
const router = express.Router();

import { createTask,getLoggedInTask} from "../controller/taskController.mjs";


router.post("/task",tokenVerification, createTask);
router.get("/getalltasks", tokenVerification, getLoggedInTask);

export default router;
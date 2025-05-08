import express from "express";
const router = express.Router();
import { createTask} from "../controller/taskController.mjs";


router.post("/task", createTask);

export default router;
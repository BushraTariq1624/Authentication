import taskSchema from "../schema/taskSchema.mjs";
import Task from "../models/task/index.mjs"
import chalk from "chalk";

const createTask = async (req, res) => {
    console.log(chalk.bgCyan("incoming call to Task api"));
    if (!req.body) {
      return req.status(400).json({ message: "Bad request" });
    }
    try {
      const task = await taskSchema.validateAsync(req.body);
      const newTask = await Task.create({ ...task });
  
      await newTask.save();
  
      res.status(200).json({
        message: "Task created successfully",
        // task: { id: newUser.id, email: newUser.email },
      });
    } catch (error) {
      if (error?.code === 11000) {
        return res.status(409).json({
          message: "Duplicate task - Task already exists",
          error: error.message,
        });
      }
      console.error(chalk.bgRed("task Error:"), error);
      res.status(500).json({
        message: "Internal Server Error",
        error: error.message,
      });
    }
  };

export {createTask}
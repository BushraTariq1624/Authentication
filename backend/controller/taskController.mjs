// import taskSchema from "../schema/taskSchema.mjs";
import Task from "../models/task/index.mjs"
import User from "../models/user/index.mjs";
import chalk from "chalk";

const createTask = async (req, res) => {
  console.log(chalk.bgCyan("incoming call to Task api"));
  if (!req.body) {
    return req.status(400).json({ message: "Bad request" });
  }
  try {
    const { title, assignedTo, description } = req.body;
    const userId = req.headers.userId;
    const newTask = await Task.create({ title, assignedTo, description });
    await User.findByIdAndUpdate(userId, { $push: { tasks: newTask._id } });
    res.status(201).json({ task: newTask });
    // const task = await taskSchema.validateAsync(req.body);
    // const newTask = await Task.create({ ...task });

    // await newTask.save();

    // res.status(200).json({
    //   message: "Task created successfully",
    // task: { id: newUser.id, email: newUser.email },
    // });
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

const getLoggedInTask = async (req, res) => {
  try {
    const userId = req.headers.userId;
    const user = await User.findById(userId).populate({
      path: "tasks",
      options: { sort: { createdAt: -1 } },
    });
    if (!user) {
      return res.status(404).json({ status: 404, message: "User not found" });
    }
    res.status(200).json({ status: 200, user });
  } catch (error) {
    console.error("Error fetching user details:", error);
    res.status(500).json({
      status: 500,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export { createTask,getLoggedInTask }
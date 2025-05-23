import express from "express";
import userRoutes from "./routes/userRoutes.mjs"
import taskRoutes from "./routes/taskRoutes.mjs"
import cors from "cors";
import connectToDB from "./db/index.mjs";

//Connecting MongoDB
connectToDB()
const app = express();

app.use(
	cors({
		origin: ['http://localhost:5173','http://localhost:5174','https://authentication-frontend-psi.vercel.app'],
		methods: ['GET', 'PUT', 'POST', 'DELETE'],
		credentials: true,
	}),
);


app.use(express.json());
const port = 5000;
app.use("/api/auth",userRoutes)
app.use("/Addtask",taskRoutes)

app.use("/", (req, res, next) => {
  console.log("Request URL:", req.url, "method: ", req.method);
  next();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

import express, { json } from "express";
import sequelize from "./models/sequelize.js";
import userRouter from "./routes/user.router.js";
import taskRouter from "./routes/task.router.js";
import "./models/user.js";
import "./models/task.js";
import defineAssociations from "./models/associations.js";

const PORT = 3000;
const app = express();

app.use(json());
app.use("/tasks", taskRouter);
app.use("/users", userRouter);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

defineAssociations();
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});

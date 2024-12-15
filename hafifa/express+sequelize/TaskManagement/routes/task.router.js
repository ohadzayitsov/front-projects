import express from 'express'; 
 import {
  handleCreateTask,
  handleGetAllTasks,
  handleGetTaskById,
  handleUpdateTask,
  handleDeleteTask,
} from "../Controllers/task.controller.js";

const router = express.Router();

router.post("/", handleCreateTask);
router.get("/", handleGetAllTasks);
router.get("/:id", handleGetTaskById);
router.put("/:id", handleUpdateTask);
router.delete("/:id", handleDeleteTask);


export default router;

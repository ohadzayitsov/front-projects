import { 
  createTask, 
  getAllTasks, 
  getTaskById, 
  updateTask, 
  deleteTask 
} from "../Services/task.service.js";

export const handleGetAllTasks = async (req, res) => {
  try {
    const tasks = await getAllTasks();
    res.status(200).send(tasks);
  } catch (error) {
    res.status(500).send({ error: error.message });
    console.error(`error: ${error.message}`);
  }
};

export const handleGetTaskById = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await getTaskById(id);
    if (!task) {
      return res.status(404).send({ message: "Task not found" });
    }
    res.status(200).send(task);
  } catch (error) {
    res.status(500).send({ error: error.message });
    console.error(`error: ${error.message}`);
  }
};

export const handleCreateTask = async (req, res) => {
  const { title, description,status,dueDate,userId } = req.body;
  try {
    const task = await createTask(title, description,status,dueDate,userId);
    res.status(201).send(task);
  } catch (error) {
    res.status(500).send({ error: error.message });
    console.error(`error: ${error.message}`);
  }
};

export const handleUpdateTask = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const updatedTask = await updateTask(id, data);
    if (!updatedTask) {
      return res.status(404).send({ message: "Task not found" });
    }
   
    
    res.status(200).send(updatedTask);
  } catch (error) {
    res.status(500).send({ error: error.message });
    console.error(`error: ${error.message}`);
  }
};

export const handleDeleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTask = await deleteTask(id);
    if (!deletedTask) {
      return res.status(404).send({ message: "Task not found" });
    }
    res.status(200).send({ message: "Task deleted successfully", task: deletedTask });
  } catch (error) {
    res.status(500).send({ error: error.message });
    console.error(`error: ${error.message}`);
  }
};

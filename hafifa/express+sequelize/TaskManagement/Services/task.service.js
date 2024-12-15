import Task from "../models/task.js";

export const getAllTasks = async () => {
  return Task.findAll();
};

export const getTaskById = async (id) => {
  return Task.findByPk(id);
};

export const createTask = async (title, description,status,dueDate,userId) => {
  return Task.create({title, description,status,dueDate,userId });
};

export const updateTask = async (id, data) => {
  const task = await Task.findByPk(id);
  
  if (!task) {
    return null;
  }
  return task.update(data);
};

export const deleteTask = async (id) => {
  const task = await Task.findByPk(id);
  if (!task) {
    return null;
  }
  await task.destroy();
  return task;
};

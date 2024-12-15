import Task from "./task.js";
import User from "./user.js";
export default async() => {
 {
  User.hasMany(Task, { foreignKey: "userId", as: "tasks" });
  Task.belongsTo(User, { foreignKey: "userId", as: "user" });
}}


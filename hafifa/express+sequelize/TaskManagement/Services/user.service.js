import User from "../models/user.js";

export const getAllUsers = async () => {
  return User.findAll();
};

export const getUserById = async (id) => {
  return User.findByPk(id);
};

export const createUser = async (name, email) => {
  return User.create({ name, email });
};

export const updateUser = async (id, data) => {
  const user = await User.findByPk(id);
  if (!user) {
    return null;
  }
  return user.update(data);
};

export const deleteUser = async (id) => {
  const user = await User.findByPk(id);
  if (!user) {
    return null;
  }
  await user.destroy();
  return user;
};

import { 
  createUser, 
  getAllUsers, 
  getUserById, 
  updateUser, 
  deleteUser 
} from "../Services/user.service.js";

export const handleGetAllUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send({ error: error.message });
    console.error(`error: ${error.message}`);
  }
};

export const handleGetUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await getUserById(id);
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send({ error: error.message });
    console.error(`error: ${error.message}`);
  }
};

export const handleCreateUser = async (req, res) => {
  const { name, email } = req.body;
  try {
    const user = await createUser(name, email);
    res.status(201).send(user);
  } catch (error) {
    res.status(500).send({ error: error.message });
    console.error(`error: ${error.message}`);
  }
};

export const handleUpdateUser = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const updatedUser = await updateUser(id, data);
    if (!updatedUser) {
      return res.status(404).send({ message: "User not found" });
    }
    res.status(200).send(updatedUser);
  } catch (error) {
    res.status(500).send({ error: error.message });
    console.error(`error: ${error.message}`);
  }
};

export const handleDeleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await deleteUser(id);
    if (!deletedUser) {
      return res.status(404).send({ message: "User not found" });
    }
    res.status(200).send({ message: "User deleted successfully", user: deletedUser });
  } catch (error) {
    res.status(500).send({ error: error.message });
    console.error(`error: ${error.message}`);
  }
};

import express from "express";
import {
  handleCreateUser,
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUser,
  handleDeleteUser,
} from "../Controllers/user.controller.js";

const router = express.Router();

router.get("/", handleGetAllUsers);
router.get("/:id", handleGetUserById);
router.post("/", handleCreateUser);
router.put("/:id", handleUpdateUser);
router.delete("/:id", handleDeleteUser);

export default router;

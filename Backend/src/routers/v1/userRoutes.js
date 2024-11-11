import express from "express";
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../../controllers/userController.js";

const router = express.Router();

// Read all users
router.get("/", getUsers);
// Create a new user
router.post("/", createUser);
// Update a user
router.put("/:id", updateUser);
// Delete a user
router.delete("/:id", deleteUser);

export default router;

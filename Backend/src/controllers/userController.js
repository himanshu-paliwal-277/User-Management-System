import {
  getUsersService,
  createUserService,
  updateUserService,
  deleteUserService,
} from "../service/userService.js";

// Get all users
export const getUsers = async (req, res) => {
  try {
    const users = await getUsersService();
    res.status(200).json({
      sucess: true,
      message: "All users fetched successfully",
      data: users,
    });
  } catch (error) {
    res.status(500).json({ error: "Error fetching users." });
  }
};

// Add a new user
export const createUser = async (req, res) => {
  try {
    const { name, email, dateOfBirth } = req.body;
    if (!name || !email || !dateOfBirth) {
      return res.status(400).json({ error: "All fields are required." });
    }
    const user = await createUserService(name, email, dateOfBirth);
    if (!user) {
      return res.status(400).json({ error: "Error creating user." });
    }
    res.status(201).json({
      sucess: true,
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    res.status(400).json({ error: "Error creating user." });
  }
};

// Update an existing user
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUserData = req.body;
    console.log("dataToUpdate = ", updatedUserData);
    const updatedUser = await updateUserService(id, updatedUserData);
    if (!updatedUser) {
      return res.status(404).json({ error: "User not found." });
    }
    res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    res.status(400).json({ 
      message: "Error updating user",
      error: error,
    });
  }
};

// Delete a user
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await deleteUserService(id);
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }
    res.status(200).json({
      success: true,
      message: "User deleted successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({ error: "Error deleting user." });
  }
};

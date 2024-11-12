import User from "../models/User.js";

export const findAllUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    throw error;
  }
};
export const createNewUser = async (name, email, dateOfBirth) => {
  try {
    const user = await User.create({ name, email, dateOfBirth });
    return user;
  } catch (error) {
    console.log("error creating user");
    throw error;
  }
};
export const updateUser = async (id, updatedUserData) => {
  try {
    if (updatedUserData.email) {
      // Check if the email already exists
      const existingUser = await User.findOne({ email: updatedUserData.email });
      if (existingUser && existingUser._id.toString() !== id) {
        throw new Error("This email already exists");
      }
    }

    console.log("data in repository layer dataToUpdate = ", updatedUserData);

    // Update user data
    const user = await User.findByIdAndUpdate(
      id,
      {
        name: updatedUserData.name,
        email: updatedUserData.email,
        dateOfBirth: updatedUserData.dateOfBirth,
      },
      { new: true } // Option to return the updated user object
    );

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  } catch (error) {
    // Log the error and throw it with a custom message
    console.error("Error updating user: ", error);
    throw new Error(
      error.message || "An error occurred while updating the user"
    );
  }
};

export const deleteUser = async (id) => {
  try {
    const user = await User.findByIdAndDelete(id);
    return user;
  } catch (error) {
    throw error;
  }
};

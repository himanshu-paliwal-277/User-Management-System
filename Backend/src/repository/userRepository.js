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
export const updateUser = async (id, updatedUser) => {
  try {
    if (updatedUser.email) {
      const existingUser = await User.findOne({ email: updatedUser.email });
      if (existingUser && existingUser._id.toString() !== id) {
        throw "this email already exists";
      }
    }
    const user = await User.findByIdAndUpdate(id, updatedUser, { new: true });
    return user;
  } catch (error) {
    throw error;
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

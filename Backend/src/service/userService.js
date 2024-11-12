import {
  findAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
} from "../repository/userRepository.js";

export const getUsersService = async () => {
  try {
    const users = await findAllUsers();
    return users;
  } catch (error) {
    throw error;
  }
};
export const createUserService = async (name, email, dateOfBirth) => {
  try {
    const user = await createNewUser(name, email, dateOfBirth);
    return user;
  } catch (error) {
    throw error;
  }
};
export const updateUserService = async (id, updatedUserData) => {
  try {
    console.log("data in service layer dataToUpdate = ", updatedUserData);
    const user = await updateUser(id, updatedUserData);
    return user;
  } catch (error) {
    console.log("error updating user");
    throw error;
  }
};
export const deleteUserService = async (id) => {
  try {
    const user = await deleteUser(id);
    return user;
  } catch (error) {
    throw error;
  }
};

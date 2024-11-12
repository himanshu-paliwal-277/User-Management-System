import { create } from "zustand";
import {
  addUserService,
  deleteUserService,
  fetchUsersService,
  updateUserService,
} from "../api/userService";

const store = create((set) => ({
  users: [],

  // fetching all users
  fetchAllUsers: async () => {
    const data = await fetchUsersService();
    console.log("data inside fetchAllUsers = ", data);
    set({ users: data });
  },

  // adding new user
  addUser: async (name, email, dateOfBirth) => {
    const data = await addUserService(name, email, dateOfBirth);
    set((state) => ({ users: [...state.users, data] }));
  },

  // updating user
  updateUser: async (id, updatedUserData) => {
    const data = await updateUserService(id, updatedUserData);
    set((state) => ({
      users: state.users.map((user) => (user._id === id ? data : user)),
    }));
  },

  // deleting user
  deleteUser: async (id) => {
    await deleteUserService(id);
    set((state) => ({
      users: state.users.filter((user) => user._id !== id),
    }));
  },
}));

export default store;

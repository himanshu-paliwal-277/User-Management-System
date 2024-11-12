import { toast } from "react-toastify";
import axiosInstance from "./axiosInstance";

// fetching all users service
export const fetchUsersService = async () => {
  try {
    const response = await axiosInstance.get("/");
    // console.log("response = ", response);
    // console.log("response.data = ", response.data.data);
    // toast.success(response.data.message);
    return response.data.data;
} catch (error) {
    toast.error(error.message);
    console.log(error);
    return error;
  }
};

// adding new user service
export const addUserService = async (name, email, dateOfBirth) => {
  try {
    const response = await axiosInstance.post("/", {
      name,
      email,
      dateOfBirth,
    });
    toast.success(response.data.message);
    return response.data;
  } catch (error) {
    console.log(error);
    toast.error(error.message);
    return error;
  }
};

// updating user service
export const updateUserService = async (id, updatedUserData) => {
  try {
    const response = await axiosInstance.put(`/${id}`, updatedUserData);
    toast.success(response.data.message);
    return response.data.data;
  } catch (error) {
    console.log(error);
    toast.error(error.message);
    return error;
  }
};

// deleting user service
export const deleteUserService = async (id) => {
  try {
    const response = await axiosInstance.delete(`/${id}`);
    toast.success(response.data.message);
    return response.data.data;
  } catch (error) {
    console.log(error);
    toast.error(error.message);
    return error;
  }
};

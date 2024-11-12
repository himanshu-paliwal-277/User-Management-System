import axiosInstance from "./axiosInstance";

// fetching all users service
export const fetchUsersService = async () => {
  try {
    const response = await axiosInstance.get("/");
    // console.log("response = ", response);
    // console.log("response.data = ", response.data.data);
    return response.data.data;
  } catch (error) {
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
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

// updating user service
export const updateUserService = async (id, updateUserData) => {
  try {
    const response = await axiosInstance.put(`/${id}`, {
      id,
      updateUserData
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

// deleting user service
export const deleteUserService = async (id) => {
  try {
    const response = await axiosInstance.delete(`/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

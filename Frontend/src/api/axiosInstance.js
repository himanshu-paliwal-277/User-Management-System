import axios from 'axios';
const API_URL = import.meta.env.VITE_API_URL;
// const API_URL = "http://localhost:3000/api/v1/users";

console.log("API_URL = ", API_URL);
const axiosInstance = axios.create(
    {
        baseURL: API_URL
    }
)

export default axiosInstance;

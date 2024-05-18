import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8002",

  // headers: {
  //   "Content-Type": "multipart/form-data", // Since you're sending form data
  //   Authorization: "Bearer YOUR_ACCESS_TOKEN", // Include your authorization token if needed
  // },
});

export default axiosInstance;


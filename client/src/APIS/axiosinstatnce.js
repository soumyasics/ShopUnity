import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:4028/shopunity_api"
  
  // baseURL:"http://hybrid.srishticampus.in/shopunity_api/"

  // headers: {
  //   "Content-Type": "multipart/form-data", // Since you're sending form data
  //   Authorization: "Bearer YOUR_ACCESS_TOKEN", // Include your authorization token if needed
  // },
});

export default axiosInstance;


import axios from "axios";

const axiosMultipartInstance = axios.create({

   baseURL: "http://localhost:4028/shopunity_api",
  
  //  baseURL:"http://hybrid.srishticampus.in/shopunity_api/",

   headers: {
    "Content-Type": "multipart/form-data", 
   }
});

export default axiosMultipartInstance
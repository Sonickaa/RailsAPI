import axios from "axios";

// You can also set a base URL from the environment variables
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://127.0.0.1:3000", // Replace with your Rails API URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;

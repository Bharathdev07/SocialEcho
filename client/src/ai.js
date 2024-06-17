import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://3.109.4.108:4000",
});

export default api;

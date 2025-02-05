import axios from "axios";

const api = axios.create({
  baseURL: "http://tu-servidor.com/api", 
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;

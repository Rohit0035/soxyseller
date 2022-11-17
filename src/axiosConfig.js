import axios from "axios";

const instance = axios.create({
  baseURL: "http://44.205.32.29:8000/admin",
  
});

export default instance;

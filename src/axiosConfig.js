import axios from "axios";

const instance = axios.create({
  baseURL: "http://35.154.86.59/api/admin",
  
});

export default instance;

import axios from "axios";

const api = axios.create({
  baseURL: "https://jetweb.herokuapp.com",
});

export default api;

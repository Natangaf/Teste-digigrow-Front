import axios from "axios";


export const api = axios.create({
  baseURL: "https://cdn-dev.preoday.com",
  timeout: 70000,
});

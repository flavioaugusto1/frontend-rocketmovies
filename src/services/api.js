import axios from "axios";

export const api = axios.create({
  baseURL: "https://rocket-movies-qc91.onrender.com",
});

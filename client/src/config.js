import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://nakamurayuto.herokuapp.com/api/",
});

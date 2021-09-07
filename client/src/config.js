import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://yutonakamura.herokuapp.com/api/",
});

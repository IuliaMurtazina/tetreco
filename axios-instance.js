import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://tetreco.com/",
});

export default axiosInstance;

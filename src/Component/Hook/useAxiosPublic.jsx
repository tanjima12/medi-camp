import axios from "axios";

export const axiosSecure = axios.create({ baseURL: "http://localhost:5005" });
const useAxiosPublic = () => {
  return axiosSecure;
};

export default useAxiosPublic;

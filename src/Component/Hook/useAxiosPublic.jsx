import axios from "axios";

export const axiosSecure = axios.create({
  baseURL: "https://b8a12-server-side-tanjima12.vercel.app",
});
const useAxiosPublic = () => {
  return axiosSecure;
};

export default useAxiosPublic;

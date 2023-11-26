import { useQuery } from "@tanstack/react-query";
import NavBar from "../Home/Navbar";
import Camp from "./Camp";
import useAxiosPublic from "../Hook/useAxiosPublic";

const AvailCamps = () => {
  const axiosSecure = useAxiosPublic();
  const { data: users } = useQuery({
    queryKey: ["popularCamps"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/popularCamps`);
      return res.data;
    },
  });

  return (
    <div>
      <NavBar></NavBar>
      <h1 className="text-2xl text-center mt-10 font-serif">
        Our Camping Service
      </h1>
      <div className="grid grid-cols-3 mt-10">
        {users?.map((camp) => (
          <Camp key={camp._id} camp={camp}></Camp>
        ))}
      </div>
    </div>
  );
};

export default AvailCamps;

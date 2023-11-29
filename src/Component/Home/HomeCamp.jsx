import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Hook/useAxiosPublic";
import Camp from "../AvailCamps/Camp";

const HomeCamp = () => {
  const axiosSecure = useAxiosPublic();
  const { data: camp = [] } = useQuery({
    queryKey: ["popularcamps"],
    queryFn: async () => {
      const res = await axiosSecure.get("/popularCamps");
      return res.data;
    },
  });
  console.log("hi", camp);
  const { data } = camp;
  // console.log("hi", data);
  return (
    <div>
      <h1 className="text-4xl font-Cinzel text-orange-900 text-center mt-10">
        Popolar Medical Camps
      </h1>
      <h1>{data?.length}</h1>
      <div className="grid grid-cols-3">
        {camp?.slice(0, 6).map((camp) => (
          <Camp key={camp._id} camp={camp}></Camp>
        ))}
      </div>
    </div>
  );
};

export default HomeCamp;

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Hook/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import "./Dash.css";

import { Button, Card } from "flowbite-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const OrganizerProfile = () => {
  const axiosSecure = useAxiosPublic();

  const { user } = useContext(AuthContext);
  const { data: profile = [] } = useQuery({
    queryKey: ["poCamp"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/?email=${user?.email}`);
      return res.data;
    },
  });
  console.log("profile", profile);
  // console.log("role", profile.email);

  const { data: feedback = [] } = useQuery({
    queryKey: ["review"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/feedback`);
      return res.data;
    },
  });

  console.log(feedback);
  return (
    <div className="bg-teal-100 mt-5">
      <Helmet>
        <title>MediCamp||Profile</title>
      </Helmet>
      <div className="pt-10 ml-96">
        {profile?.map((info) => (
          <div className="flex " key={info._id}>
            <div className="container">
              <div className="card">
                <div className="front">
                  <div className="card-top">
                    <p className="card-top-para">Profile</p>
                  </div>

                  <img
                    className="h-20 w-20 rounded-full"
                    src={info.photoURL}
                  ></img>
                  <p className="heading"> {info.name} </p>
                  <p className="follow">Email:{info.email}</p>

                  <p>Role:{info.role}</p>
                  <Link to={`/updateInfo/${info._id}`}>
                    <Button>Update</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Card className="w-[600px] h-[380px] ml-10 mt-10 mx-auto mt-10 ">
        <h5 className="text-2xl font-bold">
          <ul>
            <li>
              Overall positive experience and satisfaction. Achieved objectives
              and expectations. Willingness to attend future editions.
            </li>
          </ul>
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400 ">
          Your story:Driven by an insatiable curiosity and an unyielding work
          ethic, Alex excelled in academics despite facing financial hardships.
          After high school, with limited resources, Alex secured a scholarship
          to a prestigious university. The journey was tough, balancing
          academics, part-time jobs, and community service, but it shaped Alex
          into a resilient and compassionate individual.
        </p>
      </Card>
    </div>
  );
};

export default OrganizerProfile;

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Hook/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import "./Dash.css";

import { Button, Card } from "flowbite-react";
import { Link } from "react-router-dom";

const OrganizerProfile = () => {
  const axiosSecure = useAxiosPublic();

  const { user } = useContext(AuthContext);
  const { data: profile = [] } = useQuery({
    queryKey: ["popularCamps"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/?email=${user?.email}`);
      return res.data;
    },
  });

  return (
    <div className="flex justify-evenly">
      <div className="mt-10 ml-10">
        {profile.map((info) => (
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
                  <p>Role:{info.roll}</p>
                  <Link to={`/updateInfo/${info._id}`}>
                    <Button>Update</Button>
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <Card className="w-[600px] h-[380px] ml-10 ">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrganizerProfile;

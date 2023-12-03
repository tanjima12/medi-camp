// import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";

import NavBar from "../Home/Navbar";
import { AuthContext } from "../Authentication/AuthProvider";
import Swal from "sweetalert2";
import { Button, Label } from "flowbite-react";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../Hook/useAxiosPublic";
import { Helmet } from "react-helmet-async";

const AddCamps = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosPublic();
  const {
    register,
    reset,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const addCamp = {
      campName: data.name,
      campFees: data.fees,
      scheduledDate: data.date,
      scheduledTime: data.time,
      venueLocation: data.venueLocation,
      specializedServices: data.services,
      campDetails: data.campDetails,
      participantCount: parseInt(data.participantCount),
      healthcareProfessionals: data.health,
      image: data.photoURL,
      targetAudience: data.audience,
    };
    console.log(addCamp);
    axiosSecure
      .post("/addCamp", addCamp)
      .then((res) => {
        console.log(res.data, "added");
        reset();
        Swal.fire("successfully added");
      })
      .catch((error) => {
        console.error("Error adding upcoming camp:", error);
      });
  };
  // const handleAddCamps = (e) => {
  //   e.preventDefault();
  //   const form = e.target;

  //   const campName = form.name.value;
  //   const campFees = form.fees.value;
  //   const scheduledDate = form.date.value;
  //   const campDetails = form.campDetails.value;
  //   const venueLocation = form.venueLocation.value;
  //   const scheduledTime = parseInt(form.time.value);
  //   const image = form.photo.value;
  //   const healthcareProfessionals = form.health.value;
  //   const specializedServices = form.services.value;
  //   const participantCount = parseInt(form.participantCount.value);
  //   const targetAudience = form.audience.value;

  //   const newCamp = {
  //     campFees,
  //     scheduledDate,
  //     campDetails,
  //     venueLocation,
  //     scheduledTime,
  //     image,
  //     campName,
  //     healthcareProfessionals,
  //     specializedServices,
  //     participantCount,
  //     targetAudience,
  //   };
  //   console.log("newCamp", newCamp);

  //   fetch("https://b8a12-server-side-tanjima12.vercel.app/addCamp", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(newCamp),
  //   })
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log("Success:", data);
  //       form.reset();
  //       Swal.fire({
  //         position: "top-end",
  //         icon: "success",
  //         title: "Succesfully Updated",
  //         showConfirmButton: false,
  //         timer: 1500,
  //       });
  //     })
  //     .catch((error) => {
  //       // Handle errors here
  //       console.error("Error:", error);
  //     });
  // };

  return (
    <div>
      <Helmet>
        <title>MediCamp||addCamps</title>
      </Helmet>
      <div className="lg:flex lg:ml-0 justify-center gap-10 items-center mt-10 b pb-32 ">
        <div>
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Add Your camp
          </h5>
          <div className="flex justify-between">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-6">
                <div className="flex justify-between mr-5">
                  <div>
                    <div className="mb-2 block ">
                      <Label value="Camp Name" />
                    </div>
                    <input
                      type="text"
                      placeholder="campName"
                      className="w-[250px]"
                      {...register("name")}
                    />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label value="campFees" />
                    </div>
                    <input
                      type="text"
                      className="w-[250px]"
                      placeholder="campFees"
                      {...register("fees")}
                    />
                  </div>
                </div>

                <div className="flex justify-between mr-5">
                  <div>
                    <div className="mb-2 block">
                      <Label value="scheduledDate" />
                    </div>
                    <input
                      type="date"
                      className="w-[250px]"
                      placeholder="scheduledDate"
                      {...register("date")}
                    />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="gender" value="scheduledTime" />
                    </div>
                    <input
                      type="time"
                      className="w-[250px]"
                      placeholder="scheduledTime"
                      {...register("time")}
                    />
                  </div>
                </div>

                <div className="flex justify-between mr-5">
                  <div>
                    <div className="mb-2 block">
                      <Label value="venueLocation" />
                    </div>
                    <input
                      type="text"
                      className="w-[250px]"
                      placeholder="venueLocation"
                      name="venueLocation"
                      {...register("venueLocation")}
                    />
                  </div>
                  <div className="ml-5">
                    <div className="mb-2 block">
                      <Label value="specializedServices" />
                    </div>
                    <input
                      type="text"
                      className="w-[250px]"
                      placeholder="specializedServices"
                      name="services"
                      {...register("services")}
                    />
                  </div>
                </div>

                <div className="flex">
                  <div>
                    <div className="mb-2 block">
                      <Label value="campDetails" />
                    </div>
                    <input
                      type="text"
                      className="w-[250px]"
                      placeholder="campDetails"
                      {...register("campDetails")}
                    />
                  </div>
                  <div className="ml-5">
                    <div className="mb-2 block">
                      <Label value="participantCount" />
                    </div>
                    <input
                      type="number"
                      className="w-[250px]"
                      placeholder="participantCount"
                      {...register("participantCount")}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mr-5">
                    <div>
                      <div className="mb-2 block">
                        <Label value="healthcareProfessionals" />
                      </div>
                      <input
                        type="text"
                        className="w-[250px]"
                        placeholder="healthcareProfessionals"
                        {...register("health")}
                      />
                    </div>
                    <div className="flex justify-between ml-5">
                      <div>
                        <div className="mb-2 block">
                          <Label value="photoURL" />
                        </div>
                        <input
                          type="text"
                          className="w-[250px]"
                          placeholder="photoURL"
                          {...register("photoURL")}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between ml-5">
                    <div>
                      <div className="mb-2 block">
                        <Label
                          value="targetAudience
"
                        />
                      </div>
                      <input
                        type="text"
                        className="w-[250px]"
                        placeholder="audience"
                        {...register("audience")}
                      />
                    </div>
                  </div>

                  <div className="w-full flex justify-center mt-5">
                    <Button type="submit">Add Camp</Button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div>
        <h1 className="niceName text-6xl text-white ml-3 lg:ml-0 font-bold">
          Have a nice day and <br />
          be a little better
        </h1>
      </div>
    </div>
  );
};

export default AddCamps;

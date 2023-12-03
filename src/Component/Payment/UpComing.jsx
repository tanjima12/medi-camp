import { Button, Label } from "flowbite-react";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../Hook/useAxiosPublic";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const UpComing = () => {
  const axiosSecure = useAxiosPublic();

  const {
    register,
    reset,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const upComingCamp = {
      CampName: data.name,
      campFees: data.fees,
      sheduleDate: data.date,
      scheduleTime: data.time,
      venueLocation: data.venueLocation,
      specializedServices: data.services,
      campDetails: data.campDetails,
      participantCount: data.participantCount,
      healthcareProfessionals: data.health,
      image: data.photoURL,
      audience: data.audience,
    };
    axiosSecure
      .post("/addUpComing", upComingCamp)
      .then((res) => {
        console.log(res.data, "added");
        reset();
        Swal.fire("successfully added");
      })
      .catch((error) => {
        console.error("Error adding upcoming camp:", error);
      });
  };

  return (
    <div>
      <Helmet>
        <title>MediCamp||UpComing</title>
      </Helmet>
      <div className="lg:flex lg:ml-0 justify-center gap-10 items-center mt-10 b pb-32 ">
        <div>
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Add UpComing camp
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
                      {...register("name", { required: true })}
                      className="w-[250px]"
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
                      {...register("fees", { required: true })}
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
                      {...register("date", { required: true })}
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
                      {...register("time", { required: true })}
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
                      {...register("venueLocation", { required: true })}
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
                      {...register("services", { required: true })}
                    />
                  </div>
                </div>

                <div className="flex">
                  <div>
                    <div className="mb-2 block">
                      <Label value="Description" />
                    </div>
                    <input
                      type="text"
                      className="w-[250px]"
                      placeholder="campDetails"
                      {...register("campDetails", { required: true })}
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
                      {...register("participantCount", { required: true })}
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
                        {...register("health", { required: true })}
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
                          {...register("photoURL", { required: true })}
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
                        {...register("audience", { required: true })}
                      />
                    </div>
                  </div>

                  <div className="w-full flex justify-center mt-5">
                    <Button type="submit">Add Upcoming Camp</Button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpComing;

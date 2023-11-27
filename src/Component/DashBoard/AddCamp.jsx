// import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";

import NavBar from "../Home/Navbar";
import { AuthContext } from "../Authentication/AuthProvider";
import Swal from "sweetalert2";
import { Button, Label } from "flowbite-react";

const AddCamps = () => {
  const { user } = useContext(AuthContext);

  const handleAddCamps = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const campFees = form.fees.value;
    const scheduledDate = form.date.value;
    const campDetails = form.campDetails.value;
    const venueLocation = form.venueLocation.value;
    const scheduledTime = parseInt(form.time.value);
    const image = form.photo.value;
    const healthcareProfessionals = form.health.value;
    const specializedServices = form.services.value;
    const participantCount = parseInt(form.participantCount.value);

    const newCamp = {
      campFees,
      scheduledDate,
      campDetails,
      venueLocation,
      scheduledTime,
      image,
      name,
      healthcareProfessionals,
      specializedServices,
      participantCount,
    };
    console.log("newCamp", newCamp);

    fetch("http://localhost:5004/addCamp", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCamp),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Handle successful response
        console.log("Success:", data);
        form.reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Succesfully Updated",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <div className="lg:flex lg:ml-0 justify-center gap-10 items-center mt-10 b pb-32 ">
        <div>
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Add Your camp
          </h5>
          <div className="flex justify-between">
            <form onSubmit={handleAddCamps}>
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
                      name="name"
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
                      name="fees"
                      required
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
                      name="date"
                      required
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
                      name="time"
                      required
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
                      required
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
                      required
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
                      name="campDetails"
                      required
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
                      name="participantCount"
                      required
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
                        name="health"
                        required
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
                          name="photo"
                          required
                        />
                      </div>
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

import { Button, Label } from "flowbite-react";
import { Helmet } from "react-helmet-async";

import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const ManageUpdate = () => {
  const { id } = useParams();

  console.log(id);
  //   const loader = useLoaderData();

  const handleUpdateInfo = (e) => {
    e.preventDefault();
    const form = e.target;

    const campName = form.name.value;
    const specializedServices = form.services.value;
    const scheduledDate = form.date.value;
    const scheduledTime = form.time.value;
    const venueLocation = form.location.value;

    const updateInfo = {
      campName,
      scheduledDate,
      specializedServices,
      scheduledTime,
      venueLocation,
    };
    console.log("info", updateInfo);
    fetch(
      `https://b8a12-server-side-tanjima12.vercel.app/campUpdateInfo/${id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateInfo),
      }
    )
      .then((data) => {
        console.log("Success:", data);
        Swal.fire("SuccessFully updated");
        form.reset();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div>
      <Helmet>
        <title>MediCamp||Manage Update camps</title>
      </Helmet>
      <div className="flex justify-center mt-10">
        <form onSubmit={handleUpdateInfo}>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Update Your Camp Information
            </h3>
            <div>
              <div>
                <div className="mb-2 block ">
                  <Label value="Camp Name" />
                </div>
                <input
                  type="text"
                  placeholder="Camp Name"
                  className="w-[250px]"
                  name="name"
                />
              </div>
            </div>

            <div>
              <div className="mb-2 block">
                <Label value="SCHEDULED DATE" />
              </div>
              <input
                type="text"
                className="w-[250px]"
                placeholder="SCHEDULED DATE"
                name="date"
              />
              <div />

              <div>
                <div className="mb-2 block">
                  <Label value="VENUE LOCATION" />
                </div>
                <input
                  type="text"
                  className="w-[250px]"
                  placeholder="VENUE LOCATION"
                  name="location"
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label value="SPECIALIZED SERVICES PROVIDED" />
                </div>
                <input
                  type="text"
                  className="w-[250px]"
                  placeholder="SPECIALIZED SERVICES PROVIDED"
                  name="services"
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label value="SCHEDULED Time" />
                </div>
                <input
                  type="text"
                  className="w-[250px]"
                  placeholder="SCHEDULED Time"
                  name="time"
                />
              </div>
            </div>

            <div className="w-full flex justify-center">
              <Button type="submit">Update</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ManageUpdate;

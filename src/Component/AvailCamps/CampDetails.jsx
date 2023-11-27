import { useLoaderData } from "react-router-dom";
import { Button, Label, Modal } from "flowbite-react";
import { useContext, useState } from "react";
import { AuthContext } from "../Authentication/AuthProvider";

const CampDetails = () => {
  const loader = useLoaderData();
  const { user } = useContext(AuthContext);
  const [openModal, setOpenModal] = useState(false);
  function onCloseModal() {
    setOpenModal(false);
  }
  const {
    image,
    campName,
    campFees,
    scheduledDate,
    scheduledTime,
    venueLocation,
    specializedServices,
    healthcareProfessionals,
    targetAudience,
    campDetails,
    _id,
  } = loader || {};
  return (
    <div>
      <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <div className="relative overflow-hidden bg-cover bg-no-repeat">
          <img
            className="rounded-t-lg h-[600px] w-[1600px]"
            src={image}
            alt=""
          />
        </div>
        <div className="p-6">
          <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {campName}
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            {campDetails}
          </p>
          <div>
            <p className="text-base  dark:text-neutral-200">{targetAudience}</p>
            <p>{venueLocation}</p>
            <p>{scheduledDate}</p>
          </div>
        </div>
        <div className="flex justify-between ">
          {user?.role === "Organizers" ? (
            <Button
              disabled
              className="mb-10"
              onClick={() => setOpenModal(true)}
            >
              Join Camp
            </Button>
          ) : (
            <Button className="mb-10" onClick={() => setOpenModal(true)}>
              Join Camp
            </Button>
          )}
          <Modal show={openModal} onClose={onCloseModal} popup>
            <Modal.Header />
            <Modal.Body>
              <div className="space-y-6">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  Register camp
                </h3>
                <div className="flex justify-between mr-5">
                  <div>
                    <div className="mb-2 block ">
                      <Label value="Your Name" />
                    </div>
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-[250px]"
                      name="name"
                      required
                    />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label value="Age" />
                    </div>
                    <input
                      type="number"
                      className="w-[250px]"
                      placeholder="Age"
                      name="age"
                      required
                    />
                  </div>
                </div>

                <div className="flex justify-between mr-5">
                  <div>
                    <div className="mb-2 block">
                      <Label value="Your Phone Number" />
                    </div>
                    <input
                      type="number"
                      className="w-[250px]"
                      placeholder="phone Number"
                      name="phone"
                      required
                    />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="gender" value="Gender" />
                    </div>
                    <input
                      type="text"
                      className="w-[250px]"
                      placeholder="Gender"
                      name="gender"
                      required
                    />
                  </div>
                </div>

                <div className="flex justify-between mr-5">
                  <div>
                    <div className="mb-2 block">
                      <Label value="Camp Fees" />
                    </div>
                    <input
                      type="number"
                      className="w-[250px]"
                      placeholder="Camp Fees"
                      name="fees"
                      required
                    />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label value="Your Address" />
                    </div>
                    <input
                      type="text"
                      className="w-[250px]"
                      placeholder="Address"
                      name="address"
                      required
                    />
                  </div>
                </div>

                <div className="flex justify-between mr-5">
                  <div>
                    <div className="mb-2 block">
                      <Label value="give use Requirements" />
                    </div>
                    <input
                      type="text"
                      className="w-[250px]"
                      placeholder="Requirements"
                      name="requirements"
                      required
                    />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label value="Emergency Contact Number" />
                    </div>
                    <input
                      type="text"
                      className="w-[250px]"
                      placeholder="Emergency Contact"
                      name="contact"
                      required
                    />
                  </div>
                </div>

                <div className="w-full flex justify-center ">
                  <Button>Register</Button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default CampDetails;

import { Button, Card } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";

import { Label, Modal } from "flowbite-react";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Authentication/AuthProvider";
import useAxiosPublic from "../Hook/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const Camp = ({ camp }) => {
  const [openModal, setOpenModal] = useState(false);
  const [participantCount, setParticipantCount] = useState(
    camp.participantCount || 0
  );
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const axiosSecure = useAxiosPublic();
  const { data: profile = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/?email=${user?.email}`);
      return res.data;
    },
  });
  const [data] = profile;

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
    _id,
  } = camp;
  const handleRegistration = (e) => {
    e.preventDefault();
    if (!user || !user?.email) {
      Swal.fire({
        title: "You don not Log In",
        text: "please Log in",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "LogIn",
      }).then((result) => {
        if (result.isConfirmed) {
          refetch();
          navigate("/logIn");
        }
      });
      return;
    }
    const form = e.target;
    const name = form.name.value;
    const age = form.age.value;
    const phoneNumber = form.phone.value;
    const gender = form.gender.value;
    const fees = parseInt(form.fees.value);
    const address = form.address.value;
    const requirements = form.requirements.value;
    const contact = form.contact.value;
    const email = form.email.value;
    const campName = form.campName.value;
    const venueLocation = form.venue.value;
    const status = form.status.value;
    const date = form.date.value;

    const joinCampinfo = {
      name,
      age,
      phoneNumber,
      gender,
      fees,
      address,
      requirements,
      contact,
      campId: _id,
      email,
      campName,
      venueLocation,
      status,
      date,
    };

    fetch("https://b8a12-server-side-tanjima12.vercel.app/joinCamp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(joinCampinfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setParticipantCount(participantCount + 1);
        form.reset();
        Swal.fire("SuccessFully Submitted");
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };

  return (
    <div>
      <div>
        <Card className="max-w-sm mb-5 mt-10">
          <img src={image} alt={campName} />
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {campName}
          </h5>
          <div>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {specializedServices}
            </p>
            <p>{healthcareProfessionals}</p>
            <p>{targetAudience}</p>
          </div>
          <div className="flex justify-between">
            <p>{campFees}</p>
            <p>{venueLocation}</p>
          </div>
          <div className="flex justify-between">
            <p>Participants: {participantCount}</p>
            <p>{scheduledDate}</p>
            <p>
              {scheduledTime}.00<span> am</span>
            </p>
          </div>
          <div className="flex justify-between">
            {data?.role === "Organizers" && "Healthcare Professionals" ? (
              <Button disabled>Join Camp</Button>
            ) : (
              <Button onClick={() => setOpenModal(true)}>Join Camp</Button>
            )}

            <Modal show={openModal} onClose={onCloseModal} popup>
              <Modal.Header />

              <Modal.Body>
                <form onSubmit={handleRegistration}>
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
                          type="text"
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
                          type="text"
                          className="w-[250px]"
                          placeholder={campFees}
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
                    <div className="flex justify-between mr-5">
                      <div>
                        <div className="mb-2 block ">
                          <Label value="Please Provide Your Email" />
                        </div>
                        <input
                          type="text"
                          value={user?.email}
                          className="w-[250px]"
                          name="email"
                        />
                      </div>
                      <div>
                        <div className="mb-2 block ">
                          <Label value="Camp Name" />
                        </div>
                        <input
                          type="text"
                          value={campName}
                          className="w-[250px]"
                          name="campName"
                        />
                      </div>
                    </div>

                    <div className="flex  ">
                      <div className="mb-2 block mr">
                        <Label value="Venue:" />
                      </div>
                      <input
                        type="text"
                        className="w-[250px]"
                        placeholder="Venue"
                        value={venueLocation}
                        name="venue"
                        required
                      />

                      <div className="mb-2 block">
                        <Label value="payment Status:" />
                      </div>
                      <input
                        type="text"
                        className="w-[250px]"
                        placeholder="Payment status "
                        value="unpaid"
                        name="status"
                        required
                      />
                    </div>

                    <div>
                      <div className="mb-2 block">
                        <Label value="Date" />
                      </div>
                      <input
                        type="text"
                        className="w-[250px]"
                        placeholder="camping date"
                        name="date"
                      />
                    </div>

                    <div className="w-full flex justify-center">
                      <Button type="submit">Register</Button>
                    </div>
                  </div>
                </form>
              </Modal.Body>
            </Modal>

            <Link to={`/details/${_id}`}>
              <Button className="text-xl bg-orange-950">Details</Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Camp;

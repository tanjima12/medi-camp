import { Button, Label, Modal } from "flowbite-react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import NavBar from "../Home/Navbar";
import Swal from "sweetalert2";

const UpComingDetails = () => {
  const loader = useLoaderData();
  const [openModal, setOpenModal] = useState(false);
  const {
    CampName,
    image,
    campFees,
    campDetails,
    audience,
    sheduleDate,
    venueLocation,
    participantCount,
  } = loader;

  function onCloseModal() {
    setOpenModal(false);
  }
  console.log(loader);

  const handleRegistration = (e) => {
    e.preventDefault();
    // if (!user || !user?.email) {
    //   Swal.fire({
    //     title: "You don not Log In",
    //     text: "please Log in",
    //     icon: "warning",
    //     showCancelButton: true,
    //     confirmButtonColor: "#3085d6",
    //     cancelButtonColor: "#d33",
    //     confirmButtonText: "LogIn",
    //   }).then((result) => {
    //     if (result.isConfirmed) {
    //     }
    //   });
    //   return;
    // }
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

    const joinUpCampinfo = {
      name,
      age,
      phoneNumber,
      gender,
      fees,
      address,
      requirements,
      contact,

      email,
      campName,
      venueLocation,
      status,
    };
    console.log(joinUpCampinfo);

    fetch("https://b8a12-server-side-tanjima12.vercel.app/joinUpComing", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(joinUpCampinfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        form.reset();
        Swal.fire("SuccessFully Submitted");
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };

  return (
    <div>
      <Helmet>
        <title>MediCamp||upComingDetails</title>
      </Helmet>
      <NavBar></NavBar>
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
            Camp Name: {CampName}
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            {campDetails}
          </p>
          <div>
            <div className="flex justify-evenly">
              <p className=" text-2xl  dark:text-neutral-200 mb-3">
                Audience:{audience}
              </p>
              <p className="text-2xl">Venue:{venueLocation}</p>
            </div>
            <div className="flex justify-evenly">
              <p className="text-2xl text-red-950 mb-3">Date:{sheduleDate}</p>
              <p className="text-2xl text-red-950">
                Perticipant:{participantCount}
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Button className="mb-10" onClick={() => setOpenModal(true)}>
            Join Camp
          </Button>

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
                      <input type="text" className="w-[250px]" name="email" />
                    </div>
                    <div>
                      <div className="mb-2 block ">
                        <Label value="Camp Name" />
                      </div>
                      <input
                        type="text"
                        className="w-[250px]"
                        name="campName"
                      />
                    </div>
                  </div>
                  <div className="flex ml-5">
                    <div className="mb-2 block">
                      <Label value="Venue" />
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
                      <Label value="payment Status" />
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

                  <div className="w-full flex justify-center ">
                    <Button type="submit">Register for up Coming Camp</Button>
                  </div>
                </div>
              </form>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default UpComingDetails;

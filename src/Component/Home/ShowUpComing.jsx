import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Hook/useAxiosPublic";
import { Button, Label } from "flowbite-react";
import { Link } from "react-router-dom";

const ShowUpComing = () => {
  const axiosSecure = useAxiosPublic();
  const { data: Upcamp = [], refetch } = useQuery({
    queryKey: ["Ups"],
    queryFn: async () => {
      const res = await axiosSecure.get("/addUpComing");
      refetch();
      return res.data;
    },
  });
  return (
    <div>
      <h1 className="text-3xl font-Cinzel text-center mt-10 mb-10">
        Our UpComing Camp
      </h1>
      <div className="grid grid-cols-3">
        {Upcamp?.map((item) => (
          <div key={item?._id}>
            <div className="block w-[400px] rounded-lg mb-5 mr-5 bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <div className="relative overflow-hidden bg-cover bg-no-repeat">
                <img
                  className="rounded-t-lg h-[300px] w-[400px]"
                  src={item?.image}
                  alt=""
                />
              </div>
              <div className="p-6">
                <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  Camp Name: {item?.campName}
                </h5>
                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                  {item?.campDetails}
                </p>
                <div>
                  <div className="flex justify-evenly">
                    <p className=" text-xl  dark:text-neutral-200 mb-3">
                      Audience:{item?.targetAudience}
                    </p>
                    <p className="text-xl">Venue:{item?.venueLocation}</p>
                  </div>
                  <div className="flex justify-evenly">
                    <p className="text-xl text-red-950 mb-3">
                      Date:{item.scheduledDate}
                    </p>
                    <p className="text-xl text-red-950">
                      Perticipant:{item?.participantCount}
                    </p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <Link to="">
                    <Button className="text-xl flex bg-orange-950">
                      Details
                    </Button>
                  </Link>
                </div>
              </div>
              {/* <div className="flex justify-center">
                {data?.role === "Organizers" && "Healthcare Professionals" ? (
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
                          <Button>Register</Button>
                        </div>
                      </div>
                    </form>
                  </Modal.Body>
                </Modal>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowUpComing;

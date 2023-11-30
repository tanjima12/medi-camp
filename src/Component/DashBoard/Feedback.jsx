import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import useAxiosPublic from "../Hook/useAxiosPublic";
import { Button } from "flowbite-react";
import { MdFeedback } from "react-icons/md";
import { Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useRef, useState } from "react";
import Swal from "sweetalert2";

const Feedback = () => {
  const { user } = useContext(AuthContext);
  const [openModal, setOpenModal] = useState(false);
  const axiosSecure = useAxiosPublic();
  const { data: JoinCamp = [] } = useQuery({
    queryKey: ["popularCamps"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/joinCamp/?email=${user?.email}`);
      return res.data;
    },
  });

  function onCloseModal() {
    setOpenModal(false);
  }
  const handleFeedback = (e) => {
    e.preventDefault();
    const form = e.target;
    const testimonial = form.photoURL.value;
    const rating = parseInt(form.rate.value);
    const feedback = form.feedback.value;
    const experience = form.experience.value;
    const CampName = form.name.value;
    const feedbacks = {
      CampName,
      testimonial,
      rating,
      feedback,
      experience,
    };
    console.log(feedbacks);

    fetch("http://localhost:5004/feedback", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(feedbacks),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
        form.reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Succesfully posted",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.error("Error:", error);

        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Error: ${error.message}`,
        });
      });
  };

  return (
    <div>
      <h1 className="text-2xl text-center font-poppins mt-10">
        This is your Joining Camp.<br></br>Please feel free you give us
        yourimportant feedback
      </h1>
      <hr></hr>
      <div>
        <section>
          <div className="flex flex-col mt-6">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <div className="flex items-center gap-x-3">
                            <span>Camp Name</span>
                          </div>
                        </th>

                        <th
                          scope="col"
                          className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <button className="flex items-center gap-x-2">
                            <span>Payment Status</span>

                            <svg
                              className="h-3"
                              viewBox="0 0 10 11"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z"
                                fill="currentColor"
                                stroke="currentColor"
                              />
                              <path
                                d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z"
                                fill="currentColor"
                                stroke="currentColor"
                              />
                              <path
                                d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z"
                                fill="currentColor"
                                stroke="currentColor"
                              />
                            </svg>
                          </button>
                        </th>
                        <th
                          scope="col"
                          className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <button className="flex items-center gap-x-2">
                            <span>Confirmation Status</span>

                            <svg
                              className="h-3"
                              viewBox="0 0 10 11"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z"
                                fill="currentColor"
                                stroke="currentColor"
                              />
                              <path
                                d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z"
                                fill="currentColor"
                                stroke="currentColor"
                              />
                              <path
                                d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z"
                                fill="currentColor"
                                stroke="currentColor"
                              />
                            </svg>
                          </button>
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <button className="flex items-center gap-x-2">
                            <span>Venue</span>

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className="w-4 h-4"
                            >
                              <path d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                            </svg>
                          </button>
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Camp Fees
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <span className="mr-5">FeedBack</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                      {JoinCamp?.map((item) => (
                        <tr key={item._id}>
                          <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            <div className="inline-flex items-center gap-x-3">
                              <div className="flex items-center gap-x-2">
                                <div>
                                  <h2 className="font-medium text-gray-800 dark:text-white ">
                                    {item?.campName}
                                  </h2>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                              <h2 className=" ">
                                {item?.status === "unpaid" ? (
                                  <Button to="/dashboard/payment">Pay</Button>
                                ) : (
                                  "Paid"
                                )}
                              </h2>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                            {item?.status === "unpaid"
                              ? "pending"
                              : "confirmed"}
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                            {item?.venueLocation}
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                            {item?.fees}
                          </td>

                          <div className="flex justify-center">
                            <Button
                              className="mt-5"
                              onClick={() => setOpenModal(true)}
                            >
                              <MdFeedback></MdFeedback>
                            </Button>

                            <Modal
                              show={openModal}
                              onClose={onCloseModal}
                              popup
                            >
                              <Modal.Header />

                              <Modal.Body>
                                <form onSubmit={handleFeedback}>
                                  <div className="space-y-6">
                                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                                      Give your feed back feel free
                                    </h3>
                                    <div className="flex justify-between mr-5">
                                      <div>
                                        <div className="mb-2 block ">
                                          <Label value="Testimonial" />
                                        </div>
                                        <input
                                          type="text"
                                          placeholder="PhotoURL"
                                          className="w-[250px]"
                                          name="photoURL"
                                        />
                                      </div>

                                      <div>
                                        <div className="mb-2 block">
                                          <Label value="Ratings" />
                                        </div>
                                        <input
                                          type="number"
                                          className="w-[250px]"
                                          placeholder="Ratings"
                                          name="rate"
                                          required
                                        />
                                      </div>
                                    </div>
                                    <div>
                                      <div className="mb-2 block">
                                        <Label value="Camp Name" />
                                      </div>
                                      <input
                                        type="text"
                                        className="w-[250px]"
                                        placeholder="Camp Name"
                                        name="name"
                                        required
                                      />
                                    </div>
                                    <div>
                                      <label className="block text-sm text-gray-500 dark:text-gray-300">
                                        FeedBack
                                      </label>

                                      <textarea
                                        placeholder="Give your Feedback"
                                        name="feedback"
                                        className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                                      ></textarea>
                                    </div>
                                    <div>
                                      <label className="block text-sm text-gray-500 dark:text-gray-300">
                                        Experience
                                      </label>

                                      <textarea
                                        placeholder="Share your experience"
                                        name="experience"
                                        className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                                      ></textarea>
                                    </div>

                                    <div className="w-full flex justify-center ">
                                      <Button type="submit">Submit</Button>
                                    </div>
                                  </div>
                                </form>
                              </Modal.Body>
                            </Modal>
                          </div>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Feedback;

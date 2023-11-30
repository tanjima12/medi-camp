import { useQuery } from "@tanstack/react-query";
import { Carousel } from "flowbite-react";
import useAxiosPublic from "../Hook/useAxiosPublic";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const Testimonials = () => {
  const axiosSecure = useAxiosPublic();
  const { data: feedback = [] } = useQuery({
    queryKey: ["review"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/feedback`);
      return res.data;
    },
  });
  console.log("fee", feedback);
  return (
    <div>
      <h1 className="text-2xl font-poppins text-orange-700 text-center mt-10">
        Testimonial
      </h1>
      <p className="text-xl text-center mb-5">What Our Perticipant Say</p>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 ml-96">
        <Carousel slideInterval={5000}>
          {feedback.map((item) => (
            <div key={item._id}>
              <Rating
                className="lg:ml-56"
                style={{ maxWidth: 180 }}
                value={item.rating}
                readOnly
              />
              <h1 className="text-2xl text-green-950 lg:ml-56">
                {item.CampName}
              </h1>
              <div>
                {" "}
                <p className="">{item.feedback}</p>
                <p className=" mb-5">{item.experience}</p>
              </div>
              <div>
                <img
                  className="lg:h-60 lg:w-[700px]"
                  src={item.testimonial}
                  alt="..."
                />
              </div>
              <div></div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;

import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const Banner = () => {
  return (
    <div>
      <AwesomeSlider className="h-[700px] mt-10">
        <div
          className="bg-no-repeat bg-opacity-50"
          style={{
            backgroundImage: "url(https://i.ibb.co/RQnG18N/image-5.jpg)",
          }}
        >
          <div
            className="w-[600px] px-8 py-4 mt-16  rounded-lg shadow-lg "
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <h2 className="mt-2 text-xl font-semibold text-white dark:text-white md:mt-0">
              Children Receiving Vaccinations
            </h2>

            <p className="mt-2 text-white dark:text-gray-200 text-xl">
              this slide captures the innocence and optimism of children
              receiving vaccinations. Smiles abound, and colorful band-aids are
              on full display. The caption underscores the significance of
              preventive care in shaping a healthier future for the community,
              adding a touch of warmth and hope.
            </p>

            <div className="flex justify-end mt-4">
              <a
                href="#"
                className="text-lg font-medium text-amber-500 dark:text-blue-300"
                role="link"
              >
                A Healthier Future
              </a>
            </div>
          </div>
        </div>

        <div
          className="bg-no-repeat"
          style={{
            backgroundImage: "url(https://i.ibb.co/ts8k7MC/image-6.jpg)",
          }}
        >
          <div
            className="w-[600px] px-8 py-4 mt-56 ml-96  rounded-lg shadow-lg "
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <h2 className="mt-2 text-xl font-semibold text-white dark:text-white md:mt-0">
              Dr. Mitchell and Team in Action
            </h2>

            <p className="mt-2 text-white dark:text-gray-200 text-xl">
              this slide provides a behind-the-scenes look at the medical
              professionals in action. Candid shots of Dr. Mitchell and her team
              interacting with patients, studying charts, and offering care
              convey the dedication and compassion that defined the medical
              camp. The images exude professionalism and empathy
            </p>

            <div className="flex justify-end mt-4">
              <a
                href="#"
                className="text-lg font-medium text-amber-500 dark:text-blue-300"
                role="link"
              >
                Dedicated Medical Team
              </a>
            </div>
          </div>
        </div>
        <div
          className="bg-no-repeat"
          style={{
            backgroundImage: "url(https://i.ibb.co/Jx2F5dx/image-7.jpg)",
          }}
        >
          <div
            className="w-[600px] px-8 py-4 mt-16  rounded-lg shadow-lg "
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <h2 className="mt-2 text-xl font-semibold text-white dark:text-white md:mt-0">
              Community Engagement
            </h2>

            <p className="mt-2 text-white dark:text-gray-200 text-xl">
              this slide captures scenes from engaging health education
              workshops. Community members actively participate in discussions,
              workshops, and hands-on activities. The images convey a sense of
              empowerment and knowledge-sharing, underlining the camp's holistic
              approach to community health.
            </p>

            <div className="flex justify-end mt-4">
              <a
                href="#"
                className="text-lg font-medium text-amber-500 dark:text-blue-300"
                role="link"
              >
                Empowering the Community
              </a>
            </div>
          </div>
        </div>
        <div
          className="bannerImgFour"
          style={{
            backgroundImage: "url(https://i.ibb.co/LpkBCCv/image-9.jpg)",
          }}
        >
          <div
            className="w-[600px] px-8 py-4 mt-56  rounded-lg shadow-lg "
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <h2 className="mt-2 text-xl font-semibold text-white dark:text-white md:mt-0">
              Little Faces, Big Smiles
            </h2>

            <p className="mt-2 text-white dark:text-gray-200 text-xl">
              this slide captures candid moments of children entering the camp
              with wide smiles. The background is filled with playful images of
              balloons and cheerful volunteers, emphasizing the positive and
              child-friendly atmosphere. The caption reflects the joy and
              anticipation of the children.
            </p>

            <div className="flex justify-end mt-4">
              <a
                href="#"
                className="text-lg font-medium text-amber-500 dark:text-blue-300"
                role="link"
              >
                Joyful Beginnings
              </a>
            </div>
          </div>
        </div>
      </AwesomeSlider>
      <div>
        <h1 className="text-xl">Our Achievement</h1>
      </div>
    </div>
  );
};

export default Banner;

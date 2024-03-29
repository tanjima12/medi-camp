import { Button, Label } from "flowbite-react";
import { useContext } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Authentication/AuthProvider";
import { Helmet } from "react-helmet-async";

const UpdateOrganizerInfo = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // const loader = useLoaderData();
  // console.log(loader);
  // const { _id } = loader;
  const { id } = useParams();
  console.log(id);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const role = form.role.value;
    const photoURL = form.photoURL.value;

    const updateInfo = {
      name,
      role,
      photoURL,
    };
    console.log("info", updateInfo);
    fetch(`https://b8a12-server-side-tanjima12.vercel.app/updateInfo/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateInfo),
    })
      .then((data) => {
        console.log("Success:", data);
        Swal.fire("SuccessFully updated");
        form.reset();
        navigate(-1);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    // fetch(`https://b8a12-server-side-tanjima12.vercel.app/updateInfo/${id}`, {
    //   method: "PUT",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(updateInfo),
    // })
    //   .then((res) => {
    //     console.log(res.json());
    //     // return res.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     if (data.modifiedCount > 0) {
    //       Swal("food updated", "", "success");
    //     }
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  };
  return (
    <div className="flex justify-center mt-10">
      <Helmet>
        <title>MediCamp||Updateprofile</title>
      </Helmet>
      <form onSubmit={handleUpdate}>
        <div className="space-y-6">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            Update Your Profile
          </h3>
          <div>
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
          </div>

          <div>
            <div className="mb-2 block">
              <Label value="PhotoURL" />
            </div>
            <input
              type="text"
              className="w-[250px]"
              placeholder="PhotoURL"
              name="photoURL"
            />

            <div>
              <div className="mb-2 block">
                <Label value="Role" />
              </div>
              <input
                type="text"
                className="w-[250px]"
                placeholder="Role"
                name="role"
              />
            </div>
          </div>

          <div className="w-full flex justify-center">
            <Button type="submit">Update</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateOrganizerInfo;

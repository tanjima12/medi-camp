import { Button, Table } from "flowbite-react";
import useAxiosPublic from "../Hook/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import { FaDeleteLeft } from "react-icons/fa6";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const RegisteredCamp = () => {
  const axiosSecure = useAxiosPublic();
  const { user } = useContext(AuthContext);
  const { data: Camps = [], refetch } = useQuery({
    queryKey: ["registerCamped"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/joinCamp/?email=${user?.email}`);
      return res.data;
    },
  });
  const totalFees = Camps.reduce((total, item) => total + item.fees, 0);
  const hasUnpaidCamps = Camps.some((camp) => camp.status === "unpaid");

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/regisDlt/${_id}`).then((res) => {
          console.log(res);
          refetch();
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        });
      }
    });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold font-Cinzel text-center mt-10">
        Your Camp
      </h1>
      <div className="flex justify-evenly mt-10">
        <h1 className="text-2xl font-poppins">Total Camp: {Camps.length}</h1>
        <h1 className="text-2xl font-poppins">Price: ${totalFees}</h1>
        <Link to="/dashboard/payment">
          <Button disabled={!hasUnpaidCamps} className="text-4xl font-poppins">
            Pay
          </Button>
        </Link>
      </div>
      <div className="mt-5 mr-5 ">
        <div className="overflow-x-auto mt-5">
          <Table hoverable>
            <Table.Head>
              <Table.HeadCell>Camp Name</Table.HeadCell>

              <Table.HeadCell>Camp Fees</Table.HeadCell>
              <Table.HeadCell>Venue</Table.HeadCell>
              <Table.HeadCell> Payment Status</Table.HeadCell>
              <Table.HeadCell>Confirmation Status</Table.HeadCell>
              <Table.HeadCell>Action</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {Camps?.map((register) => (
                <Table.Row
                  key={register._id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="font-medium text-black ">
                    {register.campName}
                  </Table.Cell>
                  <Table.Cell className="text-black">
                    {register.fees}
                  </Table.Cell>
                  <Table.Cell className="text-black">
                    {register.venueLocation}
                  </Table.Cell>
                  <Table.Cell className="text-black">
                    {register.status}
                  </Table.Cell>
                  <Table.Cell className="text-black">
                    {register.status === "unpaid" ? "pending" : "confirmed"}
                  </Table.Cell>
                  <Table.Cell className="text-black">
                    <Button onClick={() => handleDelete(register._id)}>
                      <FaDeleteLeft></FaDeleteLeft>
                    </Button>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default RegisteredCamp;

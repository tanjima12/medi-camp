import { useContext } from "react";
import useAxiosPublic from "../Hook/useAxiosPublic";
import { AuthContext } from "../Authentication/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { Button, Table } from "flowbite-react";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageRegister = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosPublic();

  const { data: addcamp = [], refetch } = useQuery({
    queryKey: ["allpayment"],
    queryFn: async () => {
      const res = await axiosSecure.get("/joinCamp");
      return res.data;
    },
  });

  const handlePayment = async (pay) => {
    try {
      const res = await axiosSecure.patch(`/joinCamp/${pay._id}`);
      console.log(res);
      refetch();
      if (res.data.success) {
        Swal.fire(`${pay.campName} confirmed`);
      } else {
        Swal.fire(`Failed to confirm payment for ${pay.campName}`);
      }
    } catch (error) {
      console.error("Error confirming payment:", error.response.data);
      Swal.fire(
        "An error occurred while confirming payment. Please try again."
      );
    }
  };
  return (
    <div>
      <h1>Total Payment: {addcamp.length}</h1>
      <div>
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>Camp name</Table.HeadCell>
            <Table.HeadCell>Venue</Table.HeadCell>
            <Table.HeadCell>Date And Time</Table.HeadCell>
            <Table.HeadCell>Camp Fees</Table.HeadCell>
            <Table.HeadCell>Payment Status</Table.HeadCell>
            <Table.HeadCell>Confirmation Status</Table.HeadCell>
            <Table.HeadCell>Actions</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {addcamp.map((pay) => (
              <Table.Row
                key={pay._id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {pay.campName}
                </Table.Cell>
                <Table.Cell>{pay.Venue}</Table.Cell>
                <Table.Cell>{new Date(pay.date).toLocaleString()}</Table.Cell>
                <Table.Cell>{pay.fees}</Table.Cell>
                <Table.Cell>
                  <Button>{pay.status === "unpaid" ? "unPaid" : "paid"}</Button>
                </Table.Cell>
                <Table.Cell>
                  <Button onClick={() => handlePayment(pay)}>
                    {pay.status === "unpaid" ? "pending" : "Confirm"}
                  </Button>
                </Table.Cell>
                <Table.Cell>
                  {pay.status === "unpaid" ? (
                    <Button disabled>
                      <FaEdit></FaEdit>
                    </Button>
                  ) : (
                    <Button>
                      <FaEdit></FaEdit>
                    </Button>
                  )}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default ManageRegister;

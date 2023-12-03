import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Hook/useAxiosPublic";
import { Button, Table } from "flowbite-react";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const AllPaymentHistory = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosPublic();
  //   const userEmail = user?.email || "";
  const { data: payment = [], refetch } = useQuery({
    queryKey: ["payment"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payment`);
      return res.data;
    },
  });
  const { data } = payment;
  console.log(data);

  const handleAllPayment = (pay) => {
    axiosSecure.patch(`/payment/${pay._id}`).then((res) => {
      console.log(res.data);
      refetch();
      Swal.fire(`${pay.campName} payment confirmed`);
    });
  };

  return (
    <div>
      <Helmet>
        <title>MediCamp||All Payment</title>
      </Helmet>
      <h1>Total Payments: {payment.length}</h1>
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
            {payment.map((pay) => (
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
                  <Button>paid</Button>
                </Table.Cell>

                <Table.Cell>
                  {pay.status === "pending" ? (
                    <Button onClick={() => handleAllPayment(pay)}>
                      {pay.status}
                    </Button>
                  ) : (
                    <Button>{pay.status}</Button>
                  )}
                </Table.Cell>

                <Table.Cell>
                  <FaEdit />
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default AllPaymentHistory;

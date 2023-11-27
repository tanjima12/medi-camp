import { Button, Table } from "flowbite-react";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import useAxiosPublic from "../Hook/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManageCamps = () => {
  // const [camp, setCamp] = useState();
  const axiosSecure = useAxiosPublic();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["popularCamps"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/popularCamps`);
      return res.data;
    },
  });

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
        axiosSecure.delete(`/campDlt/${_id}`).then((res) => {
          console.log(res);
          refetch();
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        });
      }
    });
  };
  return (
    <div className="mt-5 mr-5 ">
      <div className="overflow-x-auto mt-5">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>Camp Name</Table.HeadCell>
            <Table.HeadCell>Scheduled Date and Time</Table.HeadCell>
            <Table.HeadCell>Venue Location</Table.HeadCell>
            <Table.HeadCell>Specialized Services Provided</Table.HeadCell>
            <Table.HeadCell>Edit</Table.HeadCell>
            <Table.HeadCell>Delete</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {users?.map((manage) => (
              <Table.Row
                key={manage._id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell className="font-medium text-black ">
                  {manage.campName}
                </Table.Cell>
                <Table.Cell className="text-black">
                  {manage.scheduledDate},{manage.scheduledTime}pm
                </Table.Cell>
                <Table.Cell className="text-black">
                  {manage.venueLocation}
                </Table.Cell>
                <Table.Cell className="text-black">
                  {manage.specializedServices}
                </Table.Cell>
                <Table.Cell>
                  <Link to={`/updateCamp/${manage._id}`}>
                    <Button>
                      <MdEdit></MdEdit>
                    </Button>
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  <Button onClick={() => handleDelete(manage._id)}>
                    <MdDeleteForever></MdDeleteForever>
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default ManageCamps;

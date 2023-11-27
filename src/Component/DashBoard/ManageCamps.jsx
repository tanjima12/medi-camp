import { Button, Table } from "flowbite-react";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import useAxiosPublic from "../Hook/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ManageCamps = () => {
  const axiosSecure = useAxiosPublic();
  const { data: users = [] } = useQuery({
    queryKey: ["popularCamps"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/popularCamps`);
      return res.data;
    },
  });

  
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
                  <Button>
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

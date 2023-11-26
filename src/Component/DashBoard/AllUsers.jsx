import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Hook/useAxiosPublic";
import { Button, Table } from "flowbite-react";
import { FaTrashAlt, FaUsers } from "react-icons/fa";

const AllUsers = () => {
  const axiosSecure = useAxiosPublic();
  const { data: users } = useQuery({
    queryKey: ["popularCamps"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users`);
      return res.data;
    },
  });
  const handleDltUser = (e) => {};
  return (
    <div className="mt-5">
      <div className="flex justify-evenly">
        <h1 className="text-2xl font-poppins">Total Users:</h1>
        <h1 className="text-2xl font-poppins">
          All Users:{users ? users.length : 0}
        </h1>
      </div>
      <div className="overflow-x-auto mt-5">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Email</Table.HeadCell>
            <Table.HeadCell>Role</Table.HeadCell>
            <Table.HeadCell>Action</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {users?.map((userInfo) => (
              <Table.Row
                key={userInfo._id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {userInfo.name}
                </Table.Cell>
                <Table.Cell>{userInfo.email}</Table.Cell>
                <Table.Cell>
                  <Button onClick={() => handleDltUser(users)}>
                    <FaUsers></FaUsers>
                  </Button>
                </Table.Cell>
                <Table.Cell>
                  <Button onClick={() => handleDltUser(users)}>
                    <FaTrashAlt></FaTrashAlt>
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

export default AllUsers;

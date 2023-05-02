import { getUserList } from "@/api/admin/user";
import CustomCard from "@/components/dashboard/ui/customCard";
import CustomCheckbox from "@/components/dashboard/ui/customCheckbox";
import CustomTable from "@/components/dashboard/ui/customTable";
import LinkButton from "@/components/dashboard/ui/linkButton";
import Loader from "@/components/dashboard/ui/loader";
import { adminroutes } from "@/utils/routes";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useMemo } from "react";
import {
  AiFillEye,
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlinePlus,
} from "react-icons/ai";

const Users = () => {
  const columns = useMemo(
    () => [
      {
        Header: " ",
        columns: [
          {
            Header: "S.N",
            Cell: (prop) => prop.row.index + 1,
          },
          {
            Header: "Name",
            accessor: "name",
          },
          {
            Header: "Email",
            accessor: "email",
          },
          {
            Header: "Role",
            accessor: "role",
          },
          {
            Header: "Status",

            Cell: ({ cell }) => (
              <div className="flex items-center gap-4">
                <CustomCheckbox
                  defaultChecked={
                    cell.row.original.status === "active" ? true : false
                  }
                  onChange={(e) =>
                    handleClick(
                      e,
                      cell.row.original._id,
                      cell.row.original.status
                    )
                  }
                />
              </div>
            ),
          },
          {
            Header: "Action",
            Cell: ({ cell }) => (
              <div className="flex items-center gap-4">
                <Link
                  href={adminroutes.userDetail + cell.row.original._id}
                  className="text-cyan-500 dark:text-white"
                  onClick={(e) => console.log(e)}
                >
                  <AiFillEye />
                </Link>
                <button
                  className="text-rose-500 dark:text-white"
                  onClick={() => handleDelete(cell.row.original._id)}
                >
                  <AiOutlineDelete />
                </button>
              </div>
            ),
          },
        ],
      },
    ],
    []
  );
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["user list"],
    queryFn: async () => await getUserList(),
  });

  const handleClick = (e, id, status) => {
    console.log(id, status);
  };
  const handleDelete = (id) => {
    console.log(id);
  };
  if (isLoading) {
    return (
      <>
        <Loader title="Featching User List" />
      </>
    );
  }
  return (
    <>
      <div className="fixed bottom-10 right-10 z-40">
        <LinkButton
          title="Create"
          link="/admin/users/create"
          icon={<AiOutlinePlus />}
        />
      </div>
      <div>
        <CustomCard>
          <CustomTable columns={columns} data={data?.result} />
        </CustomCard>
      </div>
    </>
  );
};

export default Users;

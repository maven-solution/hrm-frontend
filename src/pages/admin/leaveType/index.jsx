import { getLeaveTypes } from "@/api/admin/leaveType";
import CustomCard from "@/components/dashboard/ui/customCard";
import CustomTable from "@/components/dashboard/ui/customTable";
import LinkButton from "@/components/dashboard/ui/linkButton";
import Loader from "@/components/dashboard/ui/loader";
import { adminroutes } from "@/utils/routes";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useMemo } from "react";
import { AiOutlineDelete, AiOutlineEdit, AiOutlinePlus } from "react-icons/ai";

const Leavetype = () => {
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["Leave type list"],
    queryFn: async () => await getLeaveTypes(),
  });
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
            Header: "Title",
            accessor: "title",
          },
          {
            Header: "Type",
            accessor: "type",
          },
          {
            Header: "Per Month Leaves",
            accessor: "perMonthLeave",
          },
          {
            Header: "Description",
            accessor: "description",
          },

          {
            Header: "Action",
            Cell: ({ cell }) => (
              <div className="flex items-center gap-4">
                <Link
                  href={adminroutes.leaveTypes.update + cell.row.original._id}
                  className="text-cyan-500 dark:text-white"
                  onClick={(e) => console.log(e)}
                >
                  <AiOutlineEdit />
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
  if (isLoading) {
    return <Loader title="Leave Types Featching..." />;
  }
  return (
    <>
      <div className="fixed bottom-10 right-10">
        <LinkButton
          link={adminroutes.leaveTypes.create}
          title="create"
          icon={<AiOutlinePlus />}
        />
      </div>
      <CustomCard>
        <CustomTable columns={columns} data={data?.result} />
      </CustomCard>
    </>
  );
};

export default Leavetype;

import { deleteDepartment, getDepartments } from "@/api/admin/departments";
import { Alert } from "@/helper/deleteAlert";
import CustomCard from "@/components/dashboard/ui/customCard";
import CustomTable from "@/components/dashboard/ui/customTable";
import LinkButton from "@/components/dashboard/ui/linkButton";
import Loader from "@/components/dashboard/ui/loader";
import { adminroutes } from "@/utils/routes";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useMemo } from "react";
import { AiOutlineDelete, AiOutlineEdit, AiOutlinePlus } from "react-icons/ai";
import { toast } from "react-toastify";

const Departments = () => {
  const { data, isLoading, error, isError, refetch } = useQuery({
    queryKey: ["Department list"],
    queryFn: async () => await getDepartments(),
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
            Header: "Department Name",
            accessor: "title",
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
                  href={adminroutes.department.update + cell.row.original._id}
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
  const deleteDepar = async (id) => {
    try {
      const resp = await deleteDepartment(id);
      toast.success(resp.message);
      refetch();
    } catch (error) {
      toast.error(error.data.message);
    }
  };

  const handleDelete = (id) => {
    Alert(deleteDepar, id);
  };

  if (isLoading) {
    return <Loader title="Department Featching..." />;
  }
  return (
    <>
      <div className="fixed bottom-10 right-10">
        <LinkButton
          link={adminroutes.department.create}
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

export default Departments;

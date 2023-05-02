import { editDepartment, getDepartmentsById } from "@/api/admin/departments";
import DepartmentForms from "@/components/dashboard/forms/departmentFroms";
import CustomCard from "@/components/dashboard/ui/customCard";
import Loader from "@/components/dashboard/ui/loader";
import { adminroutes } from "@/utils/routes";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const UpdateDepartment = ({ id }) => {
  const router = useRouter();
  const { data, isLoading } = useQuery({
    queryKey: ["Department By Id"],
    queryFn: async () => await getDepartmentsById(id),
  });

  const def_val = {
    title: data?.result?.title,
    description: data?.result?.description,
  };

  const updateData = async (data) => {
    try {
      const resp = await editDepartment(id, data);
      toast.success(resp.message);
      router.push(adminroutes.department.index);
    } catch (error) {
      console.log(error);
      toast.error(error.data.message);
    }
  };

  if (isLoading) {
    return <Loader title="Data Featching" />;
  }

  return (
    <>
      <CustomCard>
        <DepartmentForms
          defaultValues={def_val}
          formTitle="Update Department"
          buttonTitle="Update"
          updateValues={updateData}
        />
      </CustomCard>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  return {
    props: {
      id: id,
    },
  };
};

export default UpdateDepartment;

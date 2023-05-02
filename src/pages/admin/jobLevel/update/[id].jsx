import { editjobLevel, getjobLevelById } from "@/api/admin/jobLevel";
import DepartmentForms from "@/components/dashboard/forms/departmentFroms";
import JobLevelForm from "@/components/dashboard/forms/jobLevelForm";
import JobPositionForm from "@/components/dashboard/forms/jobPositionForm";
import CustomCard from "@/components/dashboard/ui/customCard";
import Loader from "@/components/dashboard/ui/loader";
import { adminroutes } from "@/utils/routes";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const UpdateJobLevel = ({ id }) => {
  const router = useRouter();
  const { data, isLoading } = useQuery({
    queryKey: ["Job Level By Id"],
    queryFn: async () => await getjobLevelById(id),
  });

  const def_val = {
    title: data?.result?.title,
    description: data?.result?.description,
  };

  const updateData = async (data) => {
    try {
      const resp = await editjobLevel(id, data);
      toast.success(resp.message);
      router.push(adminroutes.jobLevel.index);
    } catch (error) {
      toast.error(error.data.message);
    }
  };

  if (isLoading) {
    return <Loader title="Data Featching" />;
  }

  return (
    <>
      <CustomCard>
        <JobLevelForm
          defaultValues={def_val}
          formTitle="Update Job Level"
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

export default UpdateJobLevel;

import { addJobLevel } from "@/api/admin/jobLevel";
import DepartmentForms from "@/components/dashboard/forms/departmentFroms";
import JobLevelForm from "@/components/dashboard/forms/jobLevelForm";
import CustomCard from "@/components/dashboard/ui/customCard";
import { adminroutes } from "@/utils/routes";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const CreateJobLevel = () => {
  const router = useRouter();
  const def_val = {
    title: "",
    description: "",
  };
  const create = async (data) => {
    try {
      const resp = await addJobLevel(data);
      toast.success(resp.message);
      router.push(adminroutes.jobLevel.index);
    } catch (error) {
      toast.error(error.data.message);
    }
  };
  return (
    <>
      <CustomCard>
        <JobLevelForm
          formTitle="Create a New Department"
          buttonTitle="Create"
          defaultValues={def_val}
          updateValues={create}
        />
      </CustomCard>
    </>
  );
};

export default CreateJobLevel;

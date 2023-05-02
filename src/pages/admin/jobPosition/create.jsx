import { addJobPosition } from "@/api/admin/JobPositions";
import JobPositionForm from "@/components/dashboard/forms/jobPositionForm";
import CustomCard from "@/components/dashboard/ui/customCard";
import { adminroutes } from "@/utils/routes";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const CreateJobPosition = () => {
  const router = useRouter();
  const def_val = {
    title: "",
    description: "",
  };
  const create = async (data) => {
    try {
      const resp = await addJobPosition(data);
      toast.success(resp.message);
      router.push(adminroutes.jobPosition.index);
    } catch (error) {
      toast.error(error.data.message);
    }
  };
  return (
    <>
      <CustomCard>
        <JobPositionForm
          formTitle="Create a New Job Position"
          buttonTitle="Create"
          defaultValues={def_val}
          updateValues={create}
        />
      </CustomCard>
    </>
  );
};

export default CreateJobPosition;

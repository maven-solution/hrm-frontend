import { applyLeave } from "@/api/user/leave";
import ApplyLeaveForm from "@/components/dashboard/forms/applyLeaveForm";
import CustomCard from "@/components/dashboard/ui/customCard";
import { userRoutes } from "@/utils/routes";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const ApplyLeave = () => {
  const router = useRouter();
  const def_val = {
    leave_type: "",
    start_data: "",
    end_data: "",
    description: "",
  };
  const createLeave = async (data) => {
    try {
      const resp = await applyLeave(data);
      toast.success(resp.message);
      router.push(userRoutes.leaves.index);
    } catch (error) {
      toast.error(error.data.message);
    }
  };
  return (
    <>
      <div className="w-1/2 mx-auto">
        <CustomCard>
          <ApplyLeaveForm
            formTitle="Apply for Leave"
            buttonTitle="Apply Now"
            defaultData={def_val}
            updateData={createLeave}
          />
        </CustomCard>
      </div>
    </>
  );
};

export default ApplyLeave;

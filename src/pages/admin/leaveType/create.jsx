import { addLeaveType } from "@/api/admin/leaveType";
import LeaveTypeForm from "@/components/dashboard/forms/leaveTypeForm";
import CustomCard from "@/components/dashboard/ui/customCard";
import { adminroutes } from "@/utils/routes";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const CreateLeaveType = () => {
  const router = useRouter();
  const def_val = {
    title: "",
    description: "",
    perMonthLeave: "",
    type: "",
  };

  const createleaveType = async (data) => {
    try {
      const resp = await addLeaveType(data);
      toast.success(resp.message);
      router.push(adminroutes.leaveTypes.index);
    } catch (error) {
      toast.error(error.data.message);
    }
  };

  return (
    <>
      <div className="w-1/2 mx-auto">
        <CustomCard>
          <LeaveTypeForm
            formTitle="Create Leave Type"
            buttonTitle="Create"
            defaultValues={def_val}
            updateData={createleaveType}
          />
        </CustomCard>
      </div>
    </>
  );
};

export default CreateLeaveType;

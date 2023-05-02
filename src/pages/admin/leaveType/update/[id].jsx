import { editLeaveType, getLeaveTypesById } from "@/api/admin/leaveType";
import LeaveTypeForm from "@/components/dashboard/forms/leaveTypeForm";
import CustomCard from "@/components/dashboard/ui/customCard";
import Loader from "@/components/dashboard/ui/loader";
import { adminroutes } from "@/utils/routes";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const UpdateLeaveType = ({ id }) => {
  const router = useRouter();
  const { data, isLoading } = useQuery({
    queryKey: ["Leave type by id"],
    queryFn: async () => await getLeaveTypesById(id),
  });
  const def_val = {
    title: data?.result?.title || "",
    description: data?.result?.description || "",
    perMonthLeave: data?.result?.perMonthLeave || "",
    type: data?.result?.type || "",
  };

  const updateData = async (data) => {
    try {
      const resp = await editLeaveType(id, data);
      toast.success(resp.message);
      router.push(adminroutes.leaveTypes.index);
    } catch (error) {
      toast.error(error.data.message);
    }
  };
  if (isLoading) {
    return <Loader title="Please Wait ....." />;
  }

  return (
    <>
      <div className="w-1/2 mx-auto">
        <CustomCard>
          <LeaveTypeForm
            formTitle="Update Leave Type"
            buttonTitle="Update"
            defaultValues={def_val}
            updateData={updateData}
          />
        </CustomCard>
      </div>
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

export default UpdateLeaveType;

import { getLeaveById } from "@/api/user/leave";
import ApplyLeaveForm from "@/components/dashboard/forms/applyLeaveForm";
import CustomCard from "@/components/dashboard/ui/customCard";
import Loader from "@/components/dashboard/ui/loader";
import { dateFormat } from "@/helper/date";
import { useQuery } from "@tanstack/react-query";

const UpdateLeave = ({ id }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["Leave By Id"],
    queryFn: async () => await getLeaveById(id),
  });

  const def_val = {
    leave_type: data?.result.leave_type._id,
    start_data: dateFormat(data?.result.start_data),
    end_data: dateFormat(data?.result.end_data),
    description: data?.result.description || "",
  };


  

  if (isLoading) {
    return <Loader title={"Loading..."} />;
  }

  return (
    <>
      <div className="w-1/2 mx-auto">
        <CustomCard>
          <ApplyLeaveForm
            formTitle={"Update Leave"}
            buttonTitle={"Update"}
            updateData={""}
            defaultData={def_val}
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

export default UpdateLeave;

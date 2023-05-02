import { editjobPosition, getjobPositionsById } from "@/api/admin/JobPositions";
import JobPositionForm from "@/components/dashboard/forms/jobPositionForm";
import CustomCard from "@/components/dashboard/ui/customCard";
import Loader from "@/components/dashboard/ui/loader";
import { adminroutes } from "@/utils/routes";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const UpdateJobPosition = ({ id }) => {
  const router = useRouter();
  const { data, isLoading } = useQuery({
    queryKey: ["Job POsition By Id"],
    queryFn: async () => await getjobPositionsById(id),
  });

  const def_val = {
    title: data?.result?.title,
    description: data?.result?.description,
  };

  const updateData = async (data) => {
    try {
      const resp = await editjobPosition(id, data);

      toast.success(resp.message);
      router.push(adminroutes.jobPosition.index);
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
        <JobPositionForm
          defaultValues={def_val}
          formTitle="Update Job Position"
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

export default UpdateJobPosition;

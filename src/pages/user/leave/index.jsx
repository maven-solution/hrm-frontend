import { getUserLeaves } from "@/api/user/jobs";
import LeaveList from "@/components/dashboard/ui/leaveList";
import LinkButton from "@/components/dashboard/ui/linkButton";
import Loader from "@/components/dashboard/ui/loader";
import { userRoutes } from "@/utils/routes";
import { useQuery } from "@tanstack/react-query";
import { AiOutlinePlus } from "react-icons/ai";

const Leaves = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["User Leaves"],
    queryFn: async () => await getUserLeaves(),
  });

  if (isLoading) {
    return <Loader title={"Loading Leaves..."} />;
  }

  return (
    <>
      {data?.result.map((item, index) => {
        return <LeaveList key={index} data={item} />;
      })}

      <div className="absolute bottom-10 right-10 z-50">
        <LinkButton
          link={userRoutes.leaves.apply}
          title="Apply for Leave"
          icon={<AiOutlinePlus />}
        />
      </div>
    </>
  );
};
export default Leaves;

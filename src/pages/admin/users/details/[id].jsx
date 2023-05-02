import { getUserInfo } from "@/api/admin/user";
import Loader from "@/components/dashboard/ui/loader";
import { useQuery } from "@tanstack/react-query";

const {
  default: UserDetailcard,
} = require("@/components/dashboard/ui/userDetailCard");

const UserDetails = ({ id }) => {
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["user detail"],
    queryFn: async () => await getUserInfo(id),
  });
  if (isLoading) {
    return <Loader title="Loading Information..." />;
  }
  return (
    <>
      <UserDetailcard data={data?.data} id={id} />
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

export default UserDetails;

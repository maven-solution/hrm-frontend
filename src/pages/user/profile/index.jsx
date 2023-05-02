import { getUserDetails } from "@/api/user/user";
import Loader from "@/components/dashboard/ui/loader";
import UserProfile from "@/components/dashboard/user/userProfile";
import { useQuery } from "@tanstack/react-query";

const UserProfilePage = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["user details"],
    queryFn: async () => getUserDetails(),
  });

  if (isLoading) {
    return <Loader title={"Loading..."} />;
  }
  return (
    <>
      <UserProfile data={data?.data} id={""} />
    </>
  );
};

export default UserProfilePage;

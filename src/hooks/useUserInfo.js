import { getUserInfo } from "@/api/admin/user";
import { useQuery } from "@tanstack/react-query";

const useUserInfo = (id) => {
  const { data, isLoading } = useQuery({
    queryKey: ["user details"],
    queryFn: async () => await getUserInfo(id),
  });
  const basicInfo = data?.data.basic_info;
  const userInfo = data?.data.user_info;
  const orgInfo = data?.data.org_info;

  return { userInfo, orgInfo, basicInfo, isLoading };
};

export default useUserInfo;

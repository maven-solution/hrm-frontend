import { userDashboardMenu } from "@/data/dashboardMenu";
import AdminMenus from "../../dashboard/ui/menu";
import { useSelector } from "react-redux";

const UserSidebar = () => {
  const toggle = useSelector((state) => state.toggleSidebar);
  return (
    <>
      <div
        className={`bg-white dark:bg-slate-600 dark:border-none dark:shadow-lg h-screen border w-52 fixed pt-16 ${
          toggle ? "hidden" : "block"
        }`}
      >
        <AdminMenus menus={userDashboardMenu} />
      </div>
    </>
  );
};

export default UserSidebar;

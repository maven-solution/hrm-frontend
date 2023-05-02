import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { getAuthCookie, unsetAuthCookie } from "@/utils/js-cookies";
import { authCheck } from "@/helper/authCheck";
import UserFooter from "./userFooter";
import UserHeader from "./userHeader";
import UserSidebar from "./userSidebar";
import { checkUser } from "@/helper/checkUser";

const UserLayout = ({ children }) => {
  const authorized = authCheck();
  const token = getAuthCookie();
  const router = useRouter();
  const toggle = useSelector((state) => state.toggleSidebar);
  const isUser = checkUser(token);

  useEffect(() => {
    if (!authorized || !isUser) {
      unsetAuthCookie();
      router.push("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ToastContainer />
      <UserHeader />
      <UserSidebar />
      <main
        className={`pt-20 pr-5 transition-all  ${toggle ? "pl-5" : "pl-60"}`}
      >
        {children}
      </main>
      <UserFooter />
    </>
  );
};

export default UserLayout;

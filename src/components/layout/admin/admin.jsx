import { useSelector } from "react-redux";
import AdminFooter from "./adminFooter";
import AdminHeader from "./adminHeader";
import AdminSidebar from "./adminSidebar";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { getAuthCookie, unsetAuthCookie } from "@/utils/js-cookies";
import { authCheck } from "@/helper/authCheck";
import { checkAdmin } from "@/helper/checkAdmin";

const AdminLayout = ({ children }) => {
  const authorized = authCheck();
  const token = getAuthCookie();
  const router = useRouter();
  const toggle = useSelector((state) => state.toggleSidebar);
  const isAdmin = checkAdmin(token);
  useEffect(() => {
    if (!authorized || !isAdmin) {
      unsetAuthCookie();
      router.push("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ToastContainer />
      <AdminHeader />
      <AdminSidebar />
      <main
        className={`pt-28 pr-5 transition-all  ${toggle ? "pl-5" : "pl-60"}`}
      >
        {children}
      </main>
      <AdminFooter />
    </>
  );
};

export default AdminLayout;

import Image from "next/image";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import UserDropdown from "../../dashboard/ui/userDropdown";
import { WiMoonAltWaxingCrescent6, WiSolarEclipse } from "react-icons/wi";
import { useTheme } from "next-themes";
import NotificationDropdown from "../../dashboard/ui/notificationDropdown";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import { toggleSidebar } from "@/redux/slices/sidebarSlice";
const AdminHeader = () => {
  const dispatch = useDispatch();
  const toggle = useSelector((state) => state.toggleSidebar);
  const { theme, setTheme } = useTheme();

  const handleMode = (e) => {
    const value = e.target.checked;
    if (!value) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const handleToggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <>
      <div className="bg-white border p-3 fixed top-0 left-0 w-full z-50 dark:bg-slate-800 dark:border-none">
        <div className="flex items-center">
          <div className="w-1/5 flex items-center">
            <Link href="/admin" className="inline-block">
              <Image
                src="/images/logo.png"
                width={50}
                height={50}
                alt="logo"
                className="dark:grayscale"
              />
            </Link>
            <button
              onClick={handleToggle}
              className="ml-16 bg-cyan-500 w-8 h-8 rounded-md text-white flex items-center justify-center shadow-md dark:bg-slate-600"
            >
              {toggle ? <AiOutlineDoubleRight /> : <AiOutlineDoubleLeft />}
            </button>
          </div>
          <div className="w-4/5 pr-5">
            <div className="flex justify-end items-center gap-10">
              <div className="flex items-center">
                <span className="mr-3 font-medium text-gray-900 dark:text-white dark:hidden block  ">
                  <WiMoonAltWaxingCrescent6 />
                </span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked={theme === "light" ? true : false}
                    className="sr-only peer"
                    onClick={handleMode}
                  />
                  <div className="w-9 h-5 bg-slate-500 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all  peer-checked:bg-slate-600"></div>
                </label>
                <span className="ml-3 font-medium text-gray-900 dark:text-white hidden dark:block ">
                  <WiSolarEclipse />
                </span>
              </div>
              <div>
                <NotificationDropdown />
              </div>
              <div>
                <UserDropdown />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminHeader;

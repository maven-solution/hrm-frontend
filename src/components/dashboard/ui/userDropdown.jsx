import { checkUser, decodeDetail } from "@/helper/checkUser";
import { useDecode } from "@/hooks/useDecode";
import { getAuthCookie, unsetAuthCookie } from "@/utils/js-cookies";
import { otherRoutes, userRoutes } from "@/utils/routes";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { AiOutlineDrag, AiOutlineLogout } from "react-icons/ai";

const UserDropdown = () => {
  const role = checkUser(getAuthCookie());
  const router = useRouter();
  const handleLogout = () => {
    unsetAuthCookie();
    router.push(otherRoutes.login);
  };

  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-10  h-10 text-center rounded-full text-white justify-center  bg-cyan-500 dark:bg-slate-500 px-3 py-2 text-sm  ring  ring-cyan-400 dark:ring-slate-400 ">
            KH
            <ChevronDownIcon
              className="-mr-1 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        {role ? (
          <>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-slate-600 shadow-lg right-2 focus:outline-none">
                <div className="p-2">
                  <div className="text-sm w-full flex items-center py-2 px-3 text-slate-700 dark:text-white dark:hover:text-white hover:bg-slate-100 hover:text-slate-500 rounded-md dark:hover:bg-slate-700">
                    <span>
                      <AiOutlineDrag />
                    </span>
                    <Link href={userRoutes.profile} className="ml-3">
                      Profile
                    </Link>
                  </div>
                  <div className="text-sm w-full flex items-center py-2 px-3 text-slate-700 dark:text-white dark:hover:text-white hover:bg-slate-100 hover:text-slate-500 rounded-md dark:hover:bg-slate-700">
                    <span>
                      <AiOutlineDrag />
                    </span>
                    <Link href={userRoutes.pwdChange} className="ml-3">
                      Change Password
                    </Link>
                  </div>
                  <div className="my-2">
                    <hr />
                  </div>

                  <button
                    onClick={handleLogout}
                    className="text-sm w-full flex items-center py-2 px-3 text-slate-700 dark:text-white dark:hover:text-white hover:bg-slate-100 hover:text-slate-500 rounded-md dark:hover:bg-slate-700"
                  >
                    <span>
                      <AiOutlineLogout />
                    </span>
                    <span className="ml-3">Logout</span>
                  </button>
                </div>
              </Menu.Items>
            </Transition>
          </>
        ) : (
          <>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-slate-600 shadow-lg right-2 focus:outline-none">
                <div className="p-2">
                  <div className="text-sm w-full flex items-center py-2 px-3 text-slate-700 dark:text-white dark:hover:text-white hover:bg-slate-100 hover:text-slate-500 rounded-md dark:hover:bg-slate-700">
                    <span>
                      <AiOutlineDrag />
                    </span>
                    <span className="ml-3">Profile</span>
                  </div>
                  <div className="text-sm w-full flex items-center py-2 px-3 text-slate-700 dark:text-white dark:hover:text-white hover:bg-slate-100 hover:text-slate-500 rounded-md dark:hover:bg-slate-700">
                    <span>
                      <AiOutlineDrag />
                    </span>
                    <span className="ml-3">Setting</span>
                  </div>
                  <div className="my-2">
                    <hr />
                  </div>

                  <button
                    onClick={handleLogout}
                    className="text-sm w-full flex items-center py-2 px-3 text-slate-700 dark:text-white dark:hover:text-white hover:bg-slate-100 hover:text-slate-500 rounded-md dark:hover:bg-slate-700"
                  >
                    <span>
                      <AiOutlineLogout />
                    </span>
                    <span className="ml-3">Logout</span>
                  </button>
                </div>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </>
  );
};

export default UserDropdown;

import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { Fragment } from "react";
import { AiOutlineBell, AiOutlineDrag, AiOutlineLogout } from "react-icons/ai";

const NotificationDropdown = () => {
  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex  text-center text-xl text-slate-800 dark:text-white justify-center ">
            <AiOutlineBell />
          </Menu.Button>
        </div>

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

              <button className="text-sm w-full flex items-center py-2 px-3 text-slate-700 dark:text-white dark:hover:text-white hover:bg-slate-100 hover:text-slate-500 rounded-md dark:hover:bg-slate-700">
                <span>
                  <AiOutlineLogout />
                </span>
                <span className="ml-3">Logout</span>
              </button>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};

export default NotificationDropdown;

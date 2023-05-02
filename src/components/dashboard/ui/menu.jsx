import { dashboardMenu } from "@/data/dashboardMenu";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

const AdminMenus = ({ menus }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const handleShow = (index) => {
    if (selectedIndex === index) {
      setSelectedIndex("");
    } else {
      setSelectedIndex(index);
    }
  };
  return (
    <>
      <div>
        {menus.map((item, index) => {
          return (
            <div
              key={index}
              className="hover:bg-slate-100 dark:hover:bg-slate-800 hover:shadow-sm text-slate-500 dark:text-slate-300 font-medium rounded-md m-2 py-2 px-3 text-sm block"
            >
              {}

              {item.children ? (
                <button
                  className="w-full text-left block"
                  onClick={() => handleShow(index)}
                >
                  <div className="flex items-center justify-between ">
                    <div className="flex items-center">
                      <span> {item.icon}</span>
                      <span className="ml-3"> {item.label}</span>
                    </div>

                    <span>
                      {selectedIndex === index ? (
                        <AiOutlineUp />
                      ) : (
                        <AiOutlineDown />
                      )}
                    </span>
                  </div>
                  <div
                    className={
                      selectedIndex === index ? "block pt-2" : "hidden"
                    }
                  >
                    {item.children?.map((children, index) => {
                      return (
                        <div
                          key={index}
                          className="py-2 px-3 hover:border-r-2 border-slate-300 "
                        >
                          <Link
                            href={children.link}
                            className="flex items-center"
                          >
                            <span>{children.icon}</span>
                            <span className="ml-3"> {children.label}</span>
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </button>
              ) : (
                <>
                  <Link href={item.link} className="flex items-center">
                    <span>{item.icon}</span>
                    <span className="ml-3"> {item.label}</span>
                  </Link>
                </>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AdminMenus;

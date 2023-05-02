import Link from "next/link";
import {
  AiOutlineCaretRight,
  AiOutlineLink,
  AiOutlinePlus,
} from "react-icons/ai";

const DataCard = ({ title, count, visitLink, createLink }) => {
  return (
    <>
      <div className="relative border-l-2 p-3 text-sm shadow-md rounded-md w-full border-cyan-500  bg-white dark:bg-slate-800 ">
        <div className="flex items-center justify-between">
          <div className="font-medium text-slate-700 dark:text-white">
            {title}
          </div>
          <div className="absolute top-3 right-3 w-12 h-12  text-cyan-500 rounded-full  flex items-center justify-center font-medium bg-white dark:bg-slate-900 dark:text-white">
            1200
          </div>
        </div>

        <div className="my-1 border-b border-cyan-500"></div>

        <div className="">
          <ul className="text-slate-300 flex items-center justify-start">
            <li className="mr-2 group relative hover:bg-slate-100 dark:hover:bg-slate-900 hover:font-medium py-1 px-2 rounded-md">
              <Link href={visitLink} className="flex items-center">
                <AiOutlineLink />
              </Link>
              <span className="absolute top-6 left-0 w-20 scale-0 rounded bg-slate-100 dark:bg-slate-900 dark:text-white py-1 px-2 text-slate-800 text-xs font-normal  group-hover:scale-100">
                Visit Page
              </span>
            </li>
            <li className="mr-2 group relative hover:bg-slate-100 dark:hover:bg-slate-900 hover:font-medium py-1 px-2 rounded-md">
              <Link href={createLink} className="flex items-center">
                <AiOutlinePlus />
              </Link>
              <span className="absolute top-6 left-0 w-20 scale-0 rounded bg-slate-100 dark:bg-slate-900 dark:text-white py-1 px-2 text-slate-800 text-xs font-normal  group-hover:scale-100">
                Create New
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DataCard;

import { fullYear } from "@/helper/date";
import { userRoutes } from "@/utils/routes";
import Link from "next/link";
import { AiFillFlag, AiOutlineEdit } from "react-icons/ai";

const LeaveList = ({ data }) => {
  return (
    <>
      <div className="p-3 mb-5 border border-purple-500 rounded-lg shadow-md border-l-4 border-l-pink-500 flex items-center justify-between">
        <div className="text-slate-500 text-sm font-medium flex items-center">
          <span> Leave :</span>
          <span className="ml-3 font-normal">{data.leave_type?.title}</span>
        </div>
        <div className="text-slate-500 text-sm font-medium flex items-center">
          <span> Apply Date:</span>
          <span className="ml-3 font-normal">{fullYear(data?.start_data)}</span>
        </div>
        <div className="text-slate-500 text-sm font-medium flex items-center">
          <span> End Date:</span>
          <span className="ml-3 font-normal">{fullYear(data?.end_data)}</span>
        </div>
        <div className="text-slate-500 text-sm font-medium flex items-center">
          <span> Status:</span>
          {data?.status === "pending" ? (
            <>
              {" "}
              <span className="ml-3 font-normal text-orange-500 flex items-center">
                <AiFillFlag /> <small className="ml-3"> {data?.status}</small>
              </span>
            </>
          ) : data?.status === "accepted" ? (
            <>
              <span className="ml-3 font-normal text-green-500 flex items-center">
                <AiFillFlag /> <small className="ml-3"> {data?.status}</small>
              </span>
            </>
          ) : (
            <>
              <span className="ml-3 font-normal text-red-500 flex items-center">
                <AiFillFlag /> <small className="ml-3"> {data?.status}</small>
              </span>
            </>
          )}
        </div>
        <div className="text-slate-500 text-sm font-medium flex items-center">
          <span> Leave Type:</span>
          <span className="ml-3 font-normal">
            {data?.leave_type.type === "paid" ? "Paid Leave" : "Unpaid Leave"}
          </span>
        </div>
        <div className="text-slate-500 text-sm font-medium flex items-center">
          <Link href={userRoutes.leaves.update + data?._id}>
            <AiOutlineEdit />
          </Link>
        </div>
      </div>
    </>
  );
};

export default LeaveList;

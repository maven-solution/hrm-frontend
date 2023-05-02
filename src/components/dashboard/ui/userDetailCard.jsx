import Image from "next/image";
import CustomCard from "./customCard";
import {
  AiOutlineApartment,
  AiOutlineCalendar,
  AiOutlineContainer,
  AiOutlineFlag,
  AiOutlineInfoCircle,
  AiOutlineInsertRowLeft,
  AiOutlineInsertRowRight,
  AiOutlineMail,
  AiOutlineMobile,
  AiOutlineUser,
} from "react-icons/ai";
import { BsGenderAmbiguous } from "react-icons/bs";
import LinkButton from "./linkButton";
import moment from "moment/moment";
import { adminroutes } from "@/utils/routes";

const UserDetailcard = ({ data, id }) => {
  return (
    <>
      <div className="p-3 shadow-md rounded-md border border-pink-500 flex items-center justify-between">
        <div className="flex items-center">
          <div>
            <Image
              src={
                process.env.NEXT_PUBLIC_API_IMAGE_URL + data?.basic_info?.image
              }
              alt="user Profile"
              width={100}
              height={100}
              className="rounded-full w-20 h-20 object-cover shadow-lg"
            />
          </div>
          <div className="ml-5">
            <div className="font-semibold text-slate-700">
              {data?.user_info?.name}
            </div>
            <small className="text-slate-400">
              {data?.org_info?.job_title?.title}
            </small>
          </div>
        </div>

        <div className="gap-3 flex items-center">
          <LinkButton
            link={adminroutes.basicinfo.update + id}
            title={"Update Basic Info"}
            icon={<AiOutlineInfoCircle />}
          />
          <LinkButton
            link={adminroutes.orgInfo.update + id}
            title={"Update Organization Info"}
            icon={<AiOutlineInsertRowLeft />}
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-5">
        <div>
          <CustomCard>
            <div className="font-semibold text-pink-600">Basic Information</div>
            <hr />
            <ul className="mt-3">
              <li className="text-sm text-slate-400 py-2  flex items-center">
                <div className="flex items-center ">
                  <AiOutlineUser /> <span className="ml-2">Address :</span>
                </div>
                <div className="ml-3 text-sm">{data?.basic_info?.address}</div>
              </li>
              <li className="text-sm text-slate-400 py-2  flex items-center">
                <div className="flex items-center ">
                  <AiOutlineMail /> <span className="ml-2">Email :</span>
                </div>
                <div className="ml-3 text-sm">{data?.user_info?.email}</div>
              </li>
              <li className="text-sm text-slate-400 py-2  flex items-center">
                <div className="flex items-center ">
                  <AiOutlineMobile /> <span className="ml-2">Phone :</span>
                </div>
                <div className="ml-3 text-sm">{data?.basic_info?.phone}</div>
              </li>
              <li className="text-sm text-slate-400 py-2  flex items-center">
                <div className="flex items-center ">
                  <BsGenderAmbiguous /> <span className="ml-2">Gender :</span>
                </div>
                <div className="ml-3 text-sm">{data?.basic_info?.gender}</div>
              </li>
              <li className="text-sm text-slate-400 py-2v  flex items-center">
                <div className="flex items-center ">
                  <AiOutlineCalendar />{" "}
                  <span className="ml-2">Date of Birth :</span>
                </div>
                <div className="ml-3 text-sm">
                  {moment(data?.basic_info?.dob).format("MMM Do YYYY")}
                </div>
              </li>
            </ul>
          </CustomCard>
        </div>

        <div>
          <CustomCard>
            <div className="font-semibold text-pink-600">
              Organization Information
            </div>
            <hr />
            <ul className="mt-3">
              <li className="text-sm text-slate-400 py-2  flex items-center">
                <div className="flex items-center ">
                  <AiOutlineCalendar />
                  <span className="ml-2">Join Date :</span>
                </div>
                <div className="ml-3 text-sm">
                  {moment(data?.org_info?.join_date).format("MMM Do YYYY")}
                </div>
              </li>
              <li className="text-sm text-slate-400 py-2  flex items-center">
                <div className="flex items-center ">
                  <AiOutlineFlag /> <span className="ml-2">Position :</span>
                </div>
                <div className="ml-3 text-sm">
                  {data?.org_info?.job_title?.title}
                </div>
              </li>
              <li className="text-sm text-slate-400 py-2  flex items-center">
                <div className="flex items-center ">
                  <AiOutlineApartment /> <span className="ml-2">Lebel :</span>
                </div>
                <div className="ml-3 text-sm">
                  {" "}
                  {data?.org_info?.job_position?.title}
                </div>
              </li>
              <li className="text-sm text-slate-400 py-2v  flex items-center">
                <div className="flex items-center ">
                  <AiOutlineInsertRowRight />{" "}
                  <span className="ml-2">Department :</span>
                </div>
                <div className="ml-3 text-sm">
                  {" "}
                  {data?.org_info?.department?.title}
                </div>
              </li>
            </ul>
          </CustomCard>
        </div>
        <div>
          <CustomCard>
            <div className="font-semibold text-pink-600">Other Information</div>
            <hr />
            <ul className="mt-3">
              <li className="text-sm text-slate-400 py-2  flex items-center gap-3 flex-wrap">
                <LinkButton
                  link="/"
                  title="Check Leaves"
                  icon={<AiOutlineContainer />}
                />
                <LinkButton
                  link="/"
                  title="Assign Assets"
                  icon={<AiOutlineContainer />}
                />
                <LinkButton
                  link="/"
                  title="Salary Details"
                  icon={<AiOutlineContainer />}
                />
                <LinkButton
                  link="/"
                  title="...Other Information"
                  icon={<AiOutlineContainer />}
                />
              </li>
            </ul>
          </CustomCard>
        </div>
      </div>
    </>
  );
};

export default UserDetailcard;

import { getDepartments } from "@/api/admin/departments";
import { getjobPositions, getjobTitles } from "@/api/admin/jobs";
import CustomButton from "@/components/dashboard/ui/customButton";
import CustomCard from "@/components/dashboard/ui/customCard";
import CustomInput from "@/components/dashboard/ui/customInput";
import CustomSelect from "@/components/dashboard/ui/customSelect";
import Loader from "@/components/dashboard/ui/loader";
import useUserInfo from "@/hooks/useUserInfo";
import { useQueries } from "@tanstack/react-query";
import { AiOutlineSend } from "react-icons/ai";
import { useFormik } from "formik";
import * as Yup from "yup";
import moment from "moment";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { updateOrgInfo } from "@/api/admin/user";
import { useRouter } from "next/router";

const UpdateOrganization = ({ id }) => {
  const router = useRouter();
  const { orgInfo, isLoading } = useUserInfo(id);

  const [departmentList, jobPosition, jobTitle] = useQueries({
    queries: [
      {
        queryKey: ["departmentList"],
        queryFn: async () => await getDepartments(),
      },
      {
        queryKey: ["jobPosition"],
        queryFn: async () => await getjobPositions(),
      },
      {
        queryKey: ["jobTitle"],
        queryFn: async () => await getjobTitles(),
      },
    ],
  });

  const departments = departmentList.data?.result?.map((item) => {
    return {
      value: item._id,
      label: item.title,
    };
  });
  const positions = jobPosition.data?.result?.map((item) => {
    return {
      value: item._id,
      label: item.title,
    };
  });
  const jobLebels = jobTitle.data?.result?.map((item) => {
    return {
      value: item._id,
      label: item.title,
    };
  });

  const def_val = {
    department: orgInfo?.department?._id || "" || "",
    job_title: orgInfo?.job_title?._id || "",
    job_position: orgInfo?.job_position?._id || "",
    join_date: moment(orgInfo?.join_date).format("YYYY-MM-DD") || "",
  };

  const updateOrg = async (data) => {
    try {
      const resp = await updateOrgInfo(id, data);
      toast.success(resp.message);
      router.push("/admin/users");
    } catch (error) {
      toast.error(error.data.message);
    }
  };

  const formik = useFormik({
    initialValues: def_val,
    onSubmit: (values) => {
      updateOrg(values);
    },
  });

  useEffect(() => {
    formik.setValues(def_val);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orgInfo]);
  if (isLoading) {
    return <Loader title="Loading..." />;
  }

  return (
    <>
      <div className="w-1/2 mx-auto">
        <CustomCard>
          <form onSubmit={formik.handleSubmit}>
            <CustomSelect
              name="department"
              options={departments}
              label="Select Department"
              onChange={formik.handleChange}
              value={formik.values.department}
            />
            <CustomSelect
              name="job_position"
              options={positions}
              label="Select Position"
              onChange={formik.handleChange}
              value={formik.values.job_position}
            />
            <CustomSelect
              name="job_title"
              options={jobLebels}
              label="Select Label"
              onChange={formik.handleChange}
              value={formik.values.job_title}
            />
            <CustomInput
              name="join_date"
              type="date"
              label="Join Date"
              onChange={formik.handleChange}
              value={formik.values.join_date}
            />
            <div className="mt-5">
              <CustomButton
                type="submit"
                title="Update"
                icon={<AiOutlineSend />}
              />
            </div>
          </form>
        </CustomCard>
      </div>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  return {
    props: {
      id: id,
    },
  };
};

export default UpdateOrganization;

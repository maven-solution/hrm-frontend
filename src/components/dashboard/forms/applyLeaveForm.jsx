import { AiOutlineSend } from "react-icons/ai";
import CustomTextarea from "../ui/CustomTextarea";
import CustomButton from "../ui/customButton";
import CustomInput from "../ui/customInput";
import CustomSelect from "../ui/customSelect";
import { useLeaves } from "@/hooks/useLeaves";
import { useQuery } from "@tanstack/react-query";
import { getLeaveTypes } from "@/api/admin/leaveType";
import Loader from "../ui/loader";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect } from "react";

const ApplyLeaveForm = ({
  formTitle,
  defaultData,
  updateData,
  buttonTitle,
}) => {
  const { data, isLoading } = useQuery({
    queryKey: ["Leaves list"],
    queryFn: async () => getLeaveTypes(),
  });
  console.log(defaultData);
  const options = data?.result.map((item) => {
    return {
      value: item._id,
      label: item.title,
    };
  });

  const def_val = {
    leave_type: defaultData?.leave_type || "",
    start_data: defaultData?.start_data || "",
    end_data: defaultData?.end_data || "",
    description: defaultData?.description || "",
  };
  const formik = useFormik({
    initialValues: def_val,
    validationSchema: Yup.object({
      leave_type: Yup.string().required("Required"),
      start_data: Yup.string().required("Required"),
      end_data: Yup.string().required("Required"),
      description: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      updateData(values);
    },
  });

  if (isLoading) {
    return <Loader title={"Loading Leaves..."} />;
  }

  return (
    <>
      <div className="text-pink-500 mb-5 font-semibold pb-3 border-b border-purple-700">
        {formTitle}
      </div>
      <form onSubmit={formik.handleSubmit}>
        <CustomSelect
          name="leave_type"
          label="Select Leave Title"
          options={options}
          onChange={formik.handleChange}
          value={formik.values.leave_type}
          error={formik.errors.leave_type}
        />
        <CustomInput
          type={"date"}
          label="Leave Start From"
          placeholder="Leave Start From"
          name="start_data"
          onChange={formik.handleChange}
          value={formik.values.start_data}
          error={formik.errors.start_data}
        />
        <CustomInput
          type={"date"}
          label="Leave End From"
          placeholder="Leave End From"
          name="end_data"
          onChange={formik.handleChange}
          value={formik.values.end_data}
          error={formik.errors.end_data}
        />
        <CustomTextarea
          label="Description"
          placeholder="Description"
          name="description"
          onChange={formik.handleChange}
          value={formik.values.description}
          error={formik.errors.description}
        />
        <div className="mt-5">
          <CustomButton
            type="submit"
            title={buttonTitle}
            icon={<AiOutlineSend />}
          />
        </div>
      </form>
    </>
  );
};

export default ApplyLeaveForm;

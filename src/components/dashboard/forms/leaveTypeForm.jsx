import { AiOutlinePlus } from "react-icons/ai";
import CustomButton from "../ui/customButton";
import CustomInput from "../ui/customInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect } from "react";
import CustomSelect from "../ui/customSelect";

const LeaveTypeForm = ({
  formTitle,
  defaultValues,
  buttonTitle,
  updateData,
}) => {
  const options = [
    {
      value: "paid",
      label: "Paid",
    },
    {
      value: "unpaid",
      label: "Unpaid",
    },
  ];
  const def_val = {
    title: defaultValues?.title || "",
    description: defaultValues?.description || "",
    perMonthLeave: defaultValues?.perMonthLeave || "",
    type: defaultValues?.type || "",
  };
  const formik = useFormik({
    initialValues: def_val,
    validationSchema: Yup.object({
      title: Yup.string().required("Title is Required"),
      perMonthLeave: Yup.string().required("Per Month Leave is Required"),
      type: Yup.string().required("Type is Required"),
    }),
    onSubmit: (values) => {
      updateData(values);
    },
  });

  useEffect(() => {
    formik.setValues(def_val);
    //eslint-disable-next-line
  }, [defaultValues]);

  return (
    <>
      <div className="text-pink-500 font-semibold pb-3 border-b border-purple-700">
        {formTitle}
      </div>
      <form onSubmit={formik.handleSubmit} className="mt-3">
        <CustomInput
          type="text"
          label="Title"
          placeholder="Title"
          name="title"
          onChange={formik.handleChange}
          value={formik.values.title}
          error={formik.errors.title}
        />
        <CustomInput
          name="description"
          type="text"
          label="Description"
          placeholder="Description"
          onChange={formik.handleChange}
          value={formik.values.description}
        />
        <CustomInput
          type="number"
          min="0"
          label="Per Month Leave"
          placeholder="Per Month Leave"
          name="perMonthLeave"
          onChange={formik.handleChange}
          value={formik.values.perMonthLeave}
          error={formik.errors.perMonthLeave}
        />

        <CustomSelect
          options={options}
          type="text"
          label="Type"
          placeholder="Type"
          name="type"
          onChange={formik.handleChange}
          value={formik.values.type}
          error={formik.errors.type}
        />

        <div className="mt-5">
          <CustomButton
            type="submit"
            title={buttonTitle}
            icon={<AiOutlinePlus />}
          />
        </div>
      </form>
    </>
  );
};

export default LeaveTypeForm;

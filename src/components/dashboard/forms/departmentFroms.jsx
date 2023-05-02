import { AiOutlinePlus } from "react-icons/ai";
import CustomButton from "../ui/customButton";
import CustomInput from "../ui/customInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect } from "react";

const DepartmentForms = ({
  formTitle,
  buttonTitle,
  defaultValues,
  updateValues,
}) => {
  const def_val = {
    title: defaultValues.title || "",
    description: defaultValues.description || "",
  };
  const formik = useFormik({
    initialValues: def_val,
    validationSchema: Yup.object({
      title: Yup.string().required("Title is Required"),
    }),
    onSubmit: (values) => {
      updateValues(values);
    },
  });

  useEffect(() => {
    formik.setValues(def_val);
  }, [defaultValues]);
  return (
    <>
      <div>
        <div className="text-pink-500 font-semibold pb-3 border-b border-purple-700">
          {formTitle}
        </div>
        <form
          className="flex items-center gap-5 mt-3"
          onSubmit={formik.handleSubmit}
        >
          <CustomInput
            name="title"
            placeholder="Department Name"
            label="Department Name"
            onChange={formik.handleChange}
            value={formik.values.title}
            error={formik.errors.title}
          />
          <CustomInput
            name="description"
            placeholder="Department Description"
            label="Department Description"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
          <div className="mt-5">
            <CustomButton
              type="submit"
              title={buttonTitle}
              icon={<AiOutlinePlus />}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default DepartmentForms;

import CustomButton from "@/components/dashboard/ui/customButton";
import CustomCard from "@/components/dashboard/ui/customCard";
import CustomInput from "@/components/dashboard/ui/customInput";
import CustomSelect from "@/components/dashboard/ui/customSelect";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AiOutlinePlus } from "react-icons/ai";
import { register } from "@/api/auth";
import { toast } from "react-toastify";
import { useState } from "react";
import { useRouter } from "next/router";
import Loader from "@/components/dashboard/ui/loader";
import LoadingButton from "@/components/dashboard/ui/loadingButton";

const CreateUser = () => {
  const router = useRouter();
  const [isLoading, setIsloading] = useState(false);
  const options = [
    {
      value: "admin",
      label: "Admin",
    },
    {
      value: "user",
      label: "Employee",
    },
  ];
  const createUser = async (data) => {
    setIsloading(true);
    try {
      const resp = await register(data);
      router.push("/admin/users");
      toast.success(resp.message);
      console.log(resp);
    } catch (error) {
      toast.error(error.data.message);
    }
    setIsloading(false);
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirm_password: "",
      role: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .required("Password is Required")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/\d+/, "Password Must Contain a Number")
        .matches(/[A-Z]+/, "Password Must Contain a Uppercase")
        .matches(
          /[!@#$%^&*()-+]+/,
          "Password Must Contain a Special Character"
        ),
      confirm_password: Yup.string()
        .required("Confirm Password is Required")
        .oneOf([Yup.ref("password"), null], "Passwords must match"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is Required"),
      name: Yup.string().required("Name is Required"),
      role: Yup.string().required("Role is Required"),
    }),
    onSubmit: (values) => {
      createUser(values);
    },
  });

  console.log(formik.errors);

  return (
    <>
      <div className="w-1/2 mx-auto">
        <CustomCard>
          <div className="text-center text-pink-600 text-md font-semibold">
            Create User
          </div>
          <form onSubmit={formik.handleSubmit}>
            <CustomInput
              name="name"
              type="text"
              placeholder="User Name"
              label="User Name"
              onChange={formik.handleChange}
              value={formik.values.name}
              error={formik.errors?.name}
            />
            <CustomInput
              name="email"
              type="email"
              placeholder="Email Address"
              label="Email Address"
              onChange={formik.handleChange}
              value={formik.values.email}
              error={formik.errors?.email}
            />
            <CustomInput
              name="password"
              type="password"
              placeholder="Password"
              label="Password"
              onChange={formik.handleChange}
              value={formik.values.password}
              error={formik.errors?.password}
            />
            <CustomInput
              name="confirm_password"
              type="password"
              placeholder="Confirm Password"
              label="Password"
              onChange={formik.handleChange}
              value={formik.values.confirm_password}
              error={formik.errors?.confirm_password}
            />
            <CustomSelect
              name="role"
              label="Select Role"
              options={options}
              onChange={formik.handleChange}
              value={formik.values.role}
              error={formik.errors?.role}
            />
            <div className="mt-5 flex items-center justify-center">
              {isLoading ? (
                <>
                  <LoadingButton title="Please Wait..." />
                </>
              ) : (
                <CustomButton
                  type="submit"
                  title="Create"
                  icon={<AiOutlinePlus />}
                />
              )}
            </div>
          </form>
        </CustomCard>
      </div>
    </>
  );
};

export default CreateUser;

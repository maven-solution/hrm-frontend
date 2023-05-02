import Image from "next/image";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import { login } from "@/api/auth";
import { AiOutlineLogin } from "react-icons/ai";
import { toast } from "react-toastify";

const LoginPage = () => {
  const getLogin = async (data) => {
    try {
      const resp = await login(data);
      toast.success(resp);
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      password: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      getLogin(values);
    },
  });
  return (
    <>
      <div className="container mx-auto">
        <div className="w-1/2 mx-auto ">
          <div className="flex w-full h-screen items-center justify-center gap-4 ">
            <div className="w-1/2">
              <Image
                src="/images/logo.svg"
                alt="logo"
                width={250}
                height={250}
              />
            </div>
            <div className="w-1/2">
              <div className="p-5 shadow-md bg-white rounded-md">
                <form onSubmit={formik.handleSubmit}>
                  <input
                    name="email"
                    type="email"
                    placeholder="Your Email Address"
                    className="border w-full py-2 px-4 text-sm rounded-md outline-none mb-5 focus:border-cyan-200 text-slate-500"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                  <input
                    name="password"
                    type="password"
                    placeholder="Your Password"
                    className="border w-full py-2 px-4 text-sm mb-5 rounded-md outline-none focus:border-cyan-200 text-slate-500"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                  <button
                    type="submit"
                    className="py-2 px-4 bg-cyan-500 text-slate-100 rounded-md text-sm flex items-center"
                  >
                    <AiOutlineLogin /> <span className="ml-3">Login</span>
                  </button>
                </form>

                <Link
                  href="#"
                  className="text-right block text-sm hover:underline text-rose-500"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;

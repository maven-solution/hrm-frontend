import { useEffect, useState } from "react";
import CustomButton from "@/components/dashboard/ui/customButton";
import CustomCard from "@/components/dashboard/ui/customCard";
import CustomInput from "@/components/dashboard/ui/customInput";
import CustomSelect from "@/components/dashboard/ui/customSelect";
import DropFile from "@/components/dashboard/ui/dropFile";
import { AiOutlineSend } from "react-icons/ai";
import { useFormik } from "formik";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { getUserInfo, updateBasicInfo } from "@/api/admin/user";
import { useRouter } from "next/router";
import Loader from "@/components/dashboard/ui/loader";
import moment from "moment";
import { toast } from "react-toastify";

const UpdateBasicInfo = ({ id }) => {
  const router = useRouter();
  const [imageError, setImgeError] = useState("");
  const options = [
    {
      value: "female",
      label: "Female",
    },
    {
      value: "male",
      label: "Male",
    },
  ];
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["user info"],
    queryFn: async () => await getUserInfo(id),
  });

  const def_val = {
    address: data?.data?.basic_info?.address || "",
    dob: moment(data?.data?.basic_info?.dob).format("YYYY-MM-DD") || "",
    gender: data?.data?.basic_info?.gender || "",
    phone: data?.data?.basic_info?.phone || "",
    image: data?.data?.basic_info?.image || "",
  };

  const updateInfo = async (data) => {
    try {
      const resp = await updateBasicInfo(id, data);
      router.push("/admin/users");
      toast.success(resp.message);
    } catch (error) {
      toast.error(error.data.message);
    }
  };

  const formik = useFormik({
    initialValues: def_val,
    onSubmit: (values) => {
      updateInfo(values);
    },
  });
  const handleImage = (e) => {
    const files = e.target.files[0];
    if (files.size > 5242880) {
      setImgeError("File is Too Large");
    } else {
      let parts = files.name.split(".");
      let ext = parts[parts.length - 1];
      let allowed_images = ["jpg", "jpeg", "png", "bmp", "webp", "svg"];
      if (!allowed_images.includes(ext.toLowerCase())) {
        setImgeError("Invalid Image Format");
      } else {
        setImgeError("");
        formik.setValues({
          ...formik.values,
          image: files,
        });
      }
    }
  };
  useEffect(() => {
    formik.setValues(def_val);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  if (isLoading) {
    return <Loader title="Data Featching..." />;
  }

  return (
    <>
      <div className="w-1/2 mx-auto">
        <CustomCard>
          <form onSubmit={formik.handleSubmit}>
            <CustomInput
              name="address"
              type="text"
              label="Address"
              placeholder="Address"
              onChange={formik.handleChange}
              value={formik.values.address}
            />
            <CustomInput
              name="dob"
              type="date"
              label="Date of Birth"
              placeholder="Date of Birth"
              onChange={formik.handleChange}
              value={formik.values.dob}
            />
            <CustomInput
              name="phone"
              type="text"
              label="Phone Number"
              placeholder="Phone Number"
              onChange={formik.handleChange}
              value={formik.values.phone}
            />
            <CustomSelect
              name="gender"
              label="Select Gender"
              options={options}
              onChange={formik.handleChange}
              value={formik.values.gender}
            />
            <div className="flex items-center mt-3">
              <div className="w-1/2">
                <DropFile
                  label="Your Profile Image"
                  onChange={handleImage}
                  error={imageError}
                />
              </div>
              <div className="w-1/2">
                <div>
                  {formik.values.image &&
                  typeof formik.values.image !== "string" ? (
                    <Image
                      src={URL.createObjectURL(formik.values.image)}
                      alt="user profile"
                      width={150}
                      height={200}
                      className="w-20 h-20 border rounded-full mx-auto"
                    />
                  ) : (
                    <Image
                      src={
                        process.env.NEXT_PUBLIC_API_IMAGE_URL + def_val?.image
                      }
                      alt="user profile"
                      width={150}
                      height={200}
                      className="w-20 h-20 border rounded-full mx-auto"
                    />
                  )}
                </div>
              </div>
            </div>

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
  const id = context.params.id;
  return {
    props: {
      id: id,
    },
  };
};

export default UpdateBasicInfo;

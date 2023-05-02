import { createDepartment } from "@/api/admin/departments";
import DepartmentForms from "@/components/dashboard/forms/departmentFroms";
import CustomCard from "@/components/dashboard/ui/customCard";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const CreateDepartment = () => {
  const router = useRouter();
  const def_val = {
    title: "",
    description: "",
  };
  const create = async (data) => {
    try {
      const resp = await createDepartment(data);
      toast.success(resp.message);
      router.push("/admin/departments");
    } catch (error) {
      toast.error(error.data.message);
    }
  };
  return (
    <>
      <CustomCard>
        <DepartmentForms
          formTitle="Create a New Department"
          buttonTitle="Create"
          defaultValues={def_val}
          updateValues={create}
        />
      </CustomCard>
    </>
  );
};

export default CreateDepartment;

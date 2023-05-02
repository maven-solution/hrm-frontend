import { AiOutlineDashboard, AiOutlineDrag } from "react-icons/ai";
export const dashboardMenu = [
  {
    label: "Dashboard",
    link: "/admin",
    icon: <AiOutlineDashboard />,
  },
  {
    label: "Users",
    link: "/admin/users",
    icon: <AiOutlineDrag />,
  },
  {
    label: "Leaves",
    link: "/admin/leaves",
    icon: <AiOutlineDrag />,
  },
  {
    label: "Assets Management",
    link: "/admin/assets",
    icon: <AiOutlineDrag />,
  },
  {
    label: "Salary Management",
    link: "/admin/salaries",
    icon: <AiOutlineDrag />,
  },

  {
    label: "Organization Management",
    icon: <AiOutlineDrag />,
    children: [
      {
        label: "Departments",
        link: "/admin/departments",
        icon: <AiOutlineDrag />,
      },
      {
        label: "Job Position",
        link: "/admin/jobPosition",
        icon: <AiOutlineDrag />,
      },
      {
        label: "Job Lebel",
        link: "/admin/jobLevel",
        icon: <AiOutlineDrag />,
      },
      {
        label: "Leave Type",
        link: "/admin/leaveType",
        icon: <AiOutlineDrag />,
      },
    ],
  },
  {
    label: "Settings",
    icon: <AiOutlineDrag />,
    children: [
      {
        label: "Account Setting",
        link: "/admin/account-setting",
        icon: <AiOutlineDrag />,
      },
      {
        label: "App Setting",
        link: "/admin/app-setting",
        icon: <AiOutlineDrag />,
      },
    ],
  },
];
export const userDashboardMenu = [
  {
    label: "Dashboard",
    link: "/user",
    icon: <AiOutlineDashboard />,
  },
  {
    label: "Assets",
    link: "/user/assets",
    icon: <AiOutlineDashboard />,
  },
  {
    label: "Leave Management",
    link: "/user/leave",
    icon: <AiOutlineDashboard />,
  },
  {
    label: "Payroll ",
    link: "/user/payroll",
    icon: <AiOutlineDashboard />,
  },
  {
    label: "Attendance ",
    link: "/user/attendance",
    icon: <AiOutlineDashboard />,
  },
];

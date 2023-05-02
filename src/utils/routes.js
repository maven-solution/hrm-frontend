export const adminroutes = {
  home: "/admin",
  basicinfo: {
    update: "/admin/users/basicInfo/update/",
  },
  userDetail: "/admin/users/details/",
  orgInfo: {
    update: "/admin/users/organization/update/",
  },
  department: {
    index: "/admin/departments",
    create: "/admin/departments/create",
    update: "/admin/departments/update/",
  },
  jobPosition: {
    index: "/admin/jobPosition",
    create: "/admin/jobPosition/create",
    update: "/admin/jobPosition/update/",
  },
  jobLevel: {
    index: "/admin/jobLevel",
    create: "/admin/jobLevel/create",
    update: "/admin/jobLevel/update/",
  },
  leaveTypes: {
    index: "/admin/leaveType",
    create: "/admin/leaveType/create",
    update: "/admin/leaveType/update/",
  },
};

export const userRoutes = {
  home: "/user",
  profile: "/user/profile",
  pwdChange: "chnagepwd",
  leaves: {
    index: "/user/leave",
    apply: "/user/leave/apply",
    update: "/user/leave/update/",
  },
};

export const otherRoutes = {
  login: "/login",
};

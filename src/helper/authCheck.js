import { getAuthCookie } from "@/utils/js-cookies";

export const authCheck = () => {
  const token = getAuthCookie;
  if (token) {
    return true;
  } else {
    return false;
  }
};

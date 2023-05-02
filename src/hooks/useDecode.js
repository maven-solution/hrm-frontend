import { getAuthCookie } from "@/utils/js-cookies";
import jwtDecode from "jwt-decode";
export const useDecode = () => {
  const token = getAuthCookie();
  if (token) {
    return jwtDecode(token);
  }
};

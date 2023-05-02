import { getAuthCookie } from "@/utils/js-cookies";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
const useAuth = () => {
  const [role, setRole] = useState("");
  useEffect(() => {
    const decoded = jwtDecode(getAuthCookie);
    console.log(decoded);
    if (decoded.role === "admin") {
      return true;
    } else {
      return false;
    }
  }, []);
};

export default useAuth;

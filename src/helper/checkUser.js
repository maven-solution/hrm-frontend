import jwtDecode from "jwt-decode";

export const checkUser = (token) => {
  if (token) {
    const decoded = jwtDecode(token);
    return decoded.role === "user" ? true : false;
  }
};

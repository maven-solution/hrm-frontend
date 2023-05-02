import jwtDecode from "jwt-decode";

export const checkAdmin = (token) => {
  if (token) {
    const decoded = jwtDecode(token);
    return decoded.role === "admin" ? true : false;
  }
};

import Cookies from "js-cookie";
import { httpPost } from "./axios";

export const login = async (data) => {
  try {
    const response = await httpPost("login", data);
    const token = response.token;
    Cookies.set("access_token", token);
    return response;
  } catch (error) {
    throw error;
  }
};
export const register = async (data) => {
  try {
    const response = await httpPost("register", data);
    return response;
  } catch (error) {
    throw error;
  }
};

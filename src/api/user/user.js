import { httpGet } from "../axios";

export const getUserDetails = async () => {
  try {
    const response = await httpGet("loggedinUserAllInfo", null, true);
    return response;
  } catch (error) {
    throw error;
  }
};

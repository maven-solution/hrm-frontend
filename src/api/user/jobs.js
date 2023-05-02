import { httpGet } from "../axios";

export const getUserLeaves = async () => {
  try {
    const response = await httpGet("userLeave", null, true);
    return response;
  } catch (error) {
    throw error;
  }
};

import { httpGet } from "../axios";

export const getjobPositions = async () => {
  try {
    const response = await httpGet("jobPositions", null, true);
    return response;
  } catch (error) {
    throw error;
  }
};
export const getjobTitles = async () => {
  try {
    const response = await httpGet("jobTitle", null, true);
    return response;
  } catch (error) {
    throw error;
  }
};

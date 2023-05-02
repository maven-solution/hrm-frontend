import { httpGet, httpPost } from "../axios";

export const applyLeave = async (data) => {
  try {
    const response = await httpPost("leave", data, true);
    return response;
  } catch (error) {
    throw error;
  }
};
export const getLeaveById = async (id) => {
  try {
    const response = await httpGet(`leave/${id}`, null, true);
    return response;
  } catch (error) {
    throw error;
  }
};

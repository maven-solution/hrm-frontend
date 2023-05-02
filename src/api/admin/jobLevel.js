import { httpGet, httpPost, httpPut } from "../axios";

export const getjobLevel = async () => {
  try {
    const response = await httpGet("jobTitle", null, true);
    return response;
  } catch (error) {
    throw error;
  }
};
export const addJobLevel = async (data) => {
  try {
    const response = await httpPost("jobTitle", data, true);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getjobLevelById = async (id) => {
  try {
    const response = await httpGet(`jobTitle/${id}`, null, true);
    return response;
  } catch (error) {
    throw error;
  }
};
export const editjobLevel = async (id, data) => {
  try {
    const response = await httpPut(`jobTitle/${id}`, data, true);
    return response;
  } catch (error) {
    throw error;
  }
};

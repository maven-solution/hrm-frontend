import { httpGet, httpPost, httpPut } from "../axios";

export const getjobPositions = async () => {
  try {
    const response = await httpGet("jobPositions", null, true);
    return response;
  } catch (error) {
    throw error;
  }
};
export const addJobPosition = async (data) => {
  try {
    const response = await httpPost("jobPositions", data, true);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getjobPositionsById = async (id) => {
  try {
    const response = await httpGet(`jobPositions/${id}`, null, true);
    return response;
  } catch (error) {
    throw error;
  }
};
export const editjobPosition = async (id, data) => {
  try {
    const response = await httpPut(`jobPositions/${id}`, data, true);
    return response;
  } catch (error) {
    throw error;
  }
};

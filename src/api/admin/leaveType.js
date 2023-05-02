import { httpGet, httpPost, httpPut } from "../axios";

export const getLeaveTypes = async () => {
  try {
    const response = await httpGet("leaveType", null, true);
    return response;
  } catch (error) {
    throw error;
  }
};
export const addLeaveType = async (data) => {
  try {
    const response = await httpPost("leaveType", data, true);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getLeaveTypesById = async (id) => {
  try {
    const response = await httpGet(`leaveType/${id}`, null, true);
    return response;
  } catch (error) {
    throw error;
  }
};

export const editLeaveType = async (id, data) => {
  try {
    const response = await httpPut(`leaveType/${id}`, data, true);
    return response;
  } catch (error) {
    throw error;
  }
};

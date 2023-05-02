import { httpDelete, httpGet, httpPost, httpPut } from "../axios";

export const getDepartments = async () => {
  try {
    const response = await httpGet("departments", null, true);
    return response;
  } catch (error) {
    throw error;
  }
};
export const createDepartment = async (data) => {
  try {
    const response = await httpPost("departments", data, true);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getDepartmentsById = async (id) => {
  try {
    const response = await httpGet(`departments/${id}`, null, true);
    return response;
  } catch (error) {
    throw error;
  }
};
export const editDepartment = async (id, data) => {
  try {
    const response = await httpPut(`departments/${id}`, data, true);
    return response;
  } catch (error) {
    throw error;
  }
};
export const deleteDepartment = async (id) => {
  try {
    const response = await httpDelete(`departments/${id}`, true);
    return response;
  } catch (error) {
    throw error;
  }
};

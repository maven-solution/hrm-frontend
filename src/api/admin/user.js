import { httpGet, httpPut } from "../axios";

export const getUserList = async () => {
  try {
    const response = await httpGet("userList", null, true);
    return response;
  } catch (error) {
    throw error;
  }
};
export const getUserInfo = async (id) => {
  try {
    const response = await httpGet(`userInfo/${id}`, null, true);
    return response;
  } catch (error) {
    throw error;
  }
};
export const updateBasicInfo = async (id, data) => {
  try {
    const response = await httpPut(`basicInfo/${id}`, data, true, true);
    return response;
  } catch (error) {
    throw error;
  }
};
export const updateOrgInfo = async (id, data) => {
  try {
    const response = await httpPut(`userInfo/${id}`, data, true);
    return response;
  } catch (error) {
    throw error;
  }
};

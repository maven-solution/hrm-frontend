import axios from "axios";
import { StatusCodes } from "http-status-codes";
import Cookies from "js-cookie";
import * as https from "https";

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

const httpSvc = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 30000,
  timeoutErrorMessage: "Server Time Out",
  headers: {
    "content-type": "application/json",
    Accept: "*/*",
  },
});

httpSvc.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

httpSvc.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === StatusCodes.UNAUTHORIZED) {
      return Promise.reject(error.response);
    } else if (error.response.status === StatusCodes.FORBIDDEN) {
      return Promise.reject(error.response);
    } else {
      return Promise.reject(error.response);
    }
  }
);

export const httpPost = async (
  url,
  data,
  is_strict = false,
  form_data = false
) => {
  try {
    let headers = {};
    if (form_data) {
      headers["headers"] = {
        "Content-Type": "multipart/form-data",
      };
    } else {
      headers["headers"] = {
        "Content-Type": "application/json",
      };
    }
    if (is_strict) {
      const token = Cookies.get("access_token");
      headers["headers"]["authorization"] = `Bearer ${token}`;
    }
    const response = await httpSvc.post(url, data, headers);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const httpGet = async (url, params, is_strict) => {
  try {
    let headers = {
      headers: {
        "content-type": "application/json",
      },
    };

    if (is_strict) {
      const token = Cookies.get("access_token");
      headers["headers"]["authorization"] = `Bearer ${token}`;
    }
    if (params) {
      headers["params"] = params;
    }
    const resp = await httpSvc.get(url, headers);
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const httpDelete = async (url, is_strict) => {
  try {
    let headers = {
      headers: {
        "content-type": "application/json",
      },
    };

    if (is_strict) {
      const token = Cookies.get("access_token");
      headers["headers"]["authorization"] = `Bearer ${token}`;
    }
    let resp = await httpSvc.delete(url, headers);
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const httpPut = async (
  url,
  data,
  is_strict = false,
  form_data = false
) => {
  try {
    let headers = {};
    if (form_data) {
      headers["headers"] = {
        "content-type": "multipart/form-data",
      };
    } else {
      headers["headers"] = {
        "content-type": "application/json",
      };
    }
    if (is_strict) {
      const token = Cookies.get("access_token");
      headers["headers"]["authorization"] = `Bearer ${token}`;
    }
    let response = await httpSvc.put(url, data, headers);
    return response.data;
  } catch (error) {
    throw error;
  }
};

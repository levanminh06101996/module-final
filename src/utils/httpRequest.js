import axios from "axios";

const httpRequest = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

const send = async (method, url, data, config) => {
  try {
    const res = await httpRequest.request({
      method,
      url,
      data,
      ...config,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const get = async (url, config) => {
  return send("get", url, null, config);
};

export const post = async (url, data, config) => {
  return send("post", url, data, config);
};

export const put = async (url, data, config) => {
  return send("put", url, data, config);
};
export const patch = async (url, data, config) => {
  return send("patch", url, data, config);
};

export const del = async (url, config) => {
  return send("delete", url, null, config);
};

export default {
  get,
  post,
  put,
  patch,
  del,
};

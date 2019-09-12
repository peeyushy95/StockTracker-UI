import axios from 'axios';
import {env as envInfo} from '../../helpers/helperInterface';

// creating axios instance
const axiosInstance = axios.create({
  baseURL: envInfo.env.baseUrl,
  //timeout: 2000,
});

const handleRequestConfig = (config) => {
  return config;
};

const handleRequestError = (error) => {
  return Promise.reject(error);
};

const handleResponseSuccess = (response) => {
  return response;
};

const handleResponseError = (error) => {
  return Promise.reject(error);
};

// request interceptor
axiosInstance.interceptors.request.use(handleRequestConfig, handleRequestError);

// response interceptor
axiosInstance.interceptors.response.use(handleResponseSuccess, handleResponseError);

axiosInstance.defaults.headers.post['Content-Type'] = 'application/json';

export default axiosInstance;

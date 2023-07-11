import axios from 'axios';

export const AxiosInstance = (baseURL) => {
  return axios.create({
    baseURL: baseURL,
  });
};

import axios from 'axios';

export const AxiosInstance = (baseURL, token) => {
  return axios.create({
    baseURL: baseURL,
    headers: {
      Authorization: `token ${token}`,
    },
  });
};

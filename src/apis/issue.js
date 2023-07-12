import { AxiosInstance } from '../util/axiosInstance';

const axiosInstance = AxiosInstance(
  process.env.REACT_APP_BASE_URL,
  process.env.REACT_APP_GITHUB_TOKEN
);

export const getIssues = async (page) => {
  const response = await axiosInstance.get(
    `/issues?sort=comments&page=${page}&per_page=10`
  );
  return response.data;
};

export const getIssueDetail = async (id) => {
  const response = await axiosInstance.get(`/issues/${id}`);
  return response.data;
};

export const getRepo = async () => {
  const response = await axiosInstance.get();
  return response.data;
};

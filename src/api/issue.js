import { AxiosInstance } from '../util/axiosInstance';

const axiosInstance = AxiosInstance(
  process.env.REACT_APP_BASE_URL,
  process.env.REACT_APP_GITHUB_TOKEN
);

export const getIssues = async (owner, repo, page) => {
  const response = await axiosInstance.get(
    `repos/${owner}/${repo}/issues?sort=comments&page=${page}&per_page=10`
  );
  return response.data;
};

export const getIssueDetail = async (owner, repo, id) => {
  const response = await axiosInstance.get(
    `repos/${owner}/${repo}/issues/${id}`
  );
  return response.data;
};

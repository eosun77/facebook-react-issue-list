export class IssueService {
  constructor(axiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  async get(owner, repo, page) {
    const response = await this.axiosInstance.get(
      `repos/${owner}/${repo}/issues?sort=comments&page=${page}&per_page=10`
    );
    return response.data;
  }
}

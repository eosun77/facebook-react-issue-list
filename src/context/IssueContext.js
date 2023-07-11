// IssueContext
// issues
// get

import { createContext, useContext, useEffect, useState } from 'react';

const IssueContext = createContext(null);

export const useIssue = () => useContext(IssueContext);

export function IssueProvider({ children, issueService }) {
  const [issues, setIssues] = useState([]);
  const [page, setPage] = useState(1);
  const owner = 'facebook';
  const repo = 'react';

  useEffect(() => {
    issueService.get(owner, repo, page).then((res) => setIssues(res));
  }, [issueService, owner, page, repo]);

  return (
    <IssueContext.Provider value={{ issues, page, setPage, owner, repo }}>
      {children}
    </IssueContext.Provider>
  );
}

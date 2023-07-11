import React from 'react';
import { useIssue } from '../context/IssueContext';
import IssueItem from './IssueItem/IssueItem';

function IssueList() {
  const { issues } = useIssue();
  console.log(issues);

  return (
    <div>
      {issues.map((issue) => (
        <IssueItem
          key={issue.id}
          number={issue.number}
          createdAt={issue.created_at}
          title={issue.title}
          userName={issue.user.login}
          comments={issue.comments}
        />
      ))}
    </div>
  );
}

export default IssueList;

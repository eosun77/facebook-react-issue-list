import React, { useEffect, useState } from 'react';
import { useIssue } from '../context/IssueContext';
import IssueItem from './IssueItem/IssueItem';
import { getIssues } from '../api/issue';

function IssueList() {
  const { state, dispatch } = useIssue();
  const [page, setPage] = useState(1);

  useEffect(() => {
    getIssues(state.owner, state.repo, page)
      .then((res) => {
        console.log('성공', res);
        dispatch({ type: 'INITIAL_ISSUES', payload: res });
      })
      .catch((err) => {
        console.log('에러', err);
      });
  }, [dispatch, page, state.owner, state.repo]);

  return (
    <div>
      {state.issues.map((issue) => (
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

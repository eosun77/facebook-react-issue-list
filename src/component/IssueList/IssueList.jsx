import React from 'react';
import IssueItem from '../IssueItem/IssueItem';
import Loading from '../Loading/Loading';

import { useIssueList } from '../../hooks/useIssueList';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';
import useIssueNavigate from '../../hooks/useIssueNavigate';
import { useIssue } from '../../context/IssueContext';

function IssueList() {
  const { state, dispatch } = useIssue();
  const { target, page } = useInfiniteScroll();
  const { loading } = useIssueList(page, state, dispatch);
  const { handleDetailClick } = useIssueNavigate(dispatch);

  return (
    <>
      {state.issues.map((issue) => (
        <IssueItem
          key={issue.id}
          id={issue.number}
          number={issue.number}
          createdAt={issue.created_at}
          title={issue.title}
          userName={issue.user.login}
          comments={issue.comments}
          clickEvent={() => handleDetailClick(issue.number)}
        />
      ))}
      {loading ? <Loading /> : <div ref={target} />}
    </>
  );
}

export default IssueList;

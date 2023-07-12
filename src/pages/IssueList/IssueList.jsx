import React from 'react';
import IssueItem from '../../components/IssueItem/IssueItem';
import Loading from '../../components/Loading/Loading';

import { useIssueList } from '../../hooks/useIssueList';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';
import useIssueNavigate from '../../hooks/useIssueNavigate';
import { useIssue } from '../../contexts/IssueContext';
import Ad from '../../components/Ad/Ad';

function IssueList() {
  const { state, dispatch } = useIssue();
  const { target, page } = useInfiniteScroll();
  const { loading } = useIssueList(page, dispatch);
  const { handleDetailClick } = useIssueNavigate(dispatch);

  return (
    <>
      {state.issues.map((issue, index) => (
        <div key={issue.id}>
          <IssueItem
            id={issue.number}
            number={issue.number}
            createdAt={issue.created_at}
            title={issue.title}
            userName={issue.user.login}
            comments={issue.comments}
            clickEvent={() => handleDetailClick(issue.number)}
          />
          {index % 4 === 3 && <Ad />}
        </div>
      ))}
      {loading ? <Loading /> : <div ref={target} />}
    </>
  );
}

export default IssueList;

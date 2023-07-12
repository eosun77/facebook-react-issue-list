import React, { useEffect, useState } from 'react';
import { useIssue } from '../../context/IssueContext';
import IssueItem from '../IssueItem/IssueItem';
import { getIssues } from '../../api/issue';
import Loading from '../Loading/Loading';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';
import { useNavigate } from 'react-router-dom';

function IssueList() {
  const { state, dispatch } = useIssue();
  const { page, target } = useInfiniteScroll();
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    getIssues(state.owner, state.repo, page)
      .then((res) => {
        console.log('성공', res);
        if (page === 1) {
          dispatch({ type: 'INITIAL_ISSUES', payload: res });
        } else {
          dispatch({ type: 'ADD_ISSUES', payload: res });
        }
      })
      .catch((err) => {
        console.log('에러', err);
      })
      .finally(() => setLoading(false));
  }, [dispatch, page, state.owner, state.repo]);

  const handleDetailClick = (number) => {
    dispatch({ type: 'FIND_ISSUE', payload: number });
    navigate(`/detail/${number}`);
  };

  // Render
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

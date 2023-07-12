import React, { useEffect } from 'react';
import { useIssue } from '../../context/IssueContext';
import IssueItem from '../IssueItem/IssueItem';
import { useParams } from 'react-router-dom';
import { IssueDetailHeader } from './style';
import Markdown from 'markdown-to-jsx';

import Loading from '../Loading/Loading';
import { getIssueDetail } from '../../api/issue';

function IssueDetail() {
  const { state, dispatch } = useIssue();
  const { number } = useParams();

  useEffect(() => {
    if (state.issue.number !== parseInt(number)) {
      getIssueDetail(state.owner, state.repo, number)
        .then((res) => {
          dispatch({ type: 'GET_ISSUE', payload: res });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [dispatch, number, state.issue.number, state.owner, state.repo]);

  return state.issue.number === parseInt(number) ? (
    <>
      <IssueDetailHeader>
        <img
          src={state.issue.user.avatar_url}
          width="78px"
          height="78px"
          alt="profile"
        />

        <IssueItem
          key={state.issue.id}
          number={state.issue.number}
          createdAt={state.issue.created_at}
          title={state.issue.title}
          userName={state.issue.user.login}
          comments={state.issue.comments}
        />
      </IssueDetailHeader>
      <Markdown style={{ padding: '12px 24px' }}>{state.issue.body}</Markdown>
    </>
  ) : (
    <Loading />
  );
}

export default IssueDetail;

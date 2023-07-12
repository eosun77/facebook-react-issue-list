import React from 'react';
import IssueItem from '../../component/IssueItem/IssueItem';
import { IssueDetailHeader } from './style';
import Markdown from 'markdown-to-jsx';

import Loading from '../../component/Loading/Loading';
import { useIssueDetail } from '../../hooks/useIssueDetail';
import { useIssue } from '../../context/IssueContext';

function IssueDetail() {
  const { state, dispatch } = useIssue();
  const { issueNumber } = useIssueDetail(state, dispatch);

  return state.issue.number === issueNumber ? (
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

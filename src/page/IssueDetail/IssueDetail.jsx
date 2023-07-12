import React from 'react';
import IssueItem from '../../component/IssueItem/IssueItem';
import { IssueDetailHeader } from './style';
import Markdown from 'markdown-to-jsx';

import Loading from '../../component/Loading/Loading';
import { useIssueDetail } from '../../hooks/useIssueDetail';

function IssueDetail() {
  const { issue, issueNumber } = useIssueDetail();

  return issue.number === issueNumber ? (
    <>
      <IssueDetailHeader>
        <img
          src={issue.user.avatar_url}
          width="78px"
          height="78px"
          alt="profile"
        />

        <IssueItem
          key={issue.id}
          number={issue.number}
          createdAt={issue.created_at}
          title={issue.title}
          userName={issue.user.login}
          comments={issue.comments}
        />
      </IssueDetailHeader>
      <Markdown style={{ padding: '12px 24px' }}>{issue.body}</Markdown>
    </>
  ) : (
    <Loading />
  );
}

export default IssueDetail;

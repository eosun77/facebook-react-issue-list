import React from 'react';
import {
  IssueItemInfo,
  IssueItemHeader,
  IssueItemTitle,
  IssueItemWrapper,
} from './style';

function IssueItem({ number, createdAt, title, userName, comments }) {
  return (
    <IssueItemWrapper>
      <IssueItemHeader>
        <IssueItemTitle>
          #{number} {title}
        </IssueItemTitle>
        <IssueItemInfo>코멘트: {comments}</IssueItemInfo>
      </IssueItemHeader>
      <IssueItemInfo>
        작성자: {userName}, 작성일: {createdAt}
      </IssueItemInfo>
    </IssueItemWrapper>
  );
}

export default IssueItem;

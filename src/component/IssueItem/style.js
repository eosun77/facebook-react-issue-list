import styled from 'styled-components';

const IssueItemWrapper = styled.div`
  padding: 12px 24px;
`;

const IssueItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  align-items: center;
`;

const IssueItemTitle = styled.div`
  font-size: 24px;
  font-weight: bold;

  &:hover {
    cursor: pointer;
    color: var(--blue-color);
  }
`;

const IssueItemInfo = styled.div`
  font-size: 16px;
`;

export { IssueItemWrapper, IssueItemHeader, IssueItemTitle, IssueItemInfo };

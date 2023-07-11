import React from 'react';
import { HeaderWrapper } from './style';
import { useIssue } from '../../context/IssueContext';

function Header() {
  const { owner, repo } = useIssue();
  return (
    <HeaderWrapper>
      {owner} / {repo}
    </HeaderWrapper>
  );
}

export default Header;

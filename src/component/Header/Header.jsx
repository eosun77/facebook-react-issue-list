import React from 'react';
import { HeaderWrapper } from './style';
import { useIssue } from '../../context/IssueContext';

function Header() {
  const { state } = useIssue();
  return (
    <HeaderWrapper>
      {state.owner} / {state.repo}
    </HeaderWrapper>
  );
}

export default Header;

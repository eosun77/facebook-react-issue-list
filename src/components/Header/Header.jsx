import React from 'react';
import { HeaderWrapper } from './style';
import { useIssue } from '../../contexts/IssueContext';

function Header() {
  const { state } = useIssue();
  return <HeaderWrapper>{state.repo}</HeaderWrapper>;
}

export default Header;

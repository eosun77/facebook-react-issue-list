// IssueContext
// issues
// get

import { createContext, useContext, useReducer } from 'react';

const IssueContext = createContext(null);

const initialState = {
  owner: 'facebook',
  repo: 'react',
  issues: [],
  issue: {},
};

const issueReducer = (state, action) => {
  switch (action.type) {
    case 'INITIAL_ISSUES':
      return {
        ...state,
        issues: [...action.payload],
      };
    case 'ADD_ISSUES':
      return {
        ...state,
        issues: [...state.issues, ...action.payload],
      };
    case 'FIND_ISSUE':
      return {
        ...state,
        issue: state.issues.find((issue) => issue.number === action.payload),
      };
    case 'GET_ISSUE':
      return {
        ...state,
        issue: action.payload,
      };
    default:
      return state;
  }
};

export const useIssue = () => useContext(IssueContext);

export function IssueProvider({ children }) {
  const [state, dispatch] = useReducer(issueReducer, initialState);

  return (
    <IssueContext.Provider value={{ state, dispatch }}>
      {children}
    </IssueContext.Provider>
  );
}

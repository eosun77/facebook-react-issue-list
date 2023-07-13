// IssueContext
// issues
// get

import { createContext, useContext, useEffect, useReducer } from 'react';
import { getRepo } from '../apis/issue';
import dateFormatter from '../util/dateFormatter';

const IssueContext = createContext(null);

const initialState = {
  repo: '',
  issues: [],
  issue: {},
};

const findIssue = (issues, number) =>
  issues.find((issue) => issue.number === number);

const formatIssue = (issue) => ({
  ...issue,
  created_at: dateFormatter(issue.created_at),
});

const formatIssues = (issues) => issues.map(formatIssue);

const issueReducer = (state, action) => {
  switch (action.type) {
    case 'INITIAL_ISSUES':
      return {
        ...state,
        issues: formatIssues(action.payload),
      };
    case 'ADD_ISSUES':
      return {
        ...state,
        issues: [...state.issues, ...formatIssues(action.payload)],
      };
    case 'FIND_ISSUE':
      return {
        ...state,
        issue: findIssue(state.issues, action.payload),
      };
    case 'GET_ISSUE':
      return {
        ...state,
        issue: formatIssue(action.payload),
      };
    case 'GET_REPO':
      return {
        ...state,
        repo: action.payload,
      };
    default:
      return state;
  }
};

export const useIssue = () => useContext(IssueContext);

export function IssueProvider({ children }) {
  const [state, dispatch] = useReducer(issueReducer, initialState);

  useEffect(() => {
    getRepo().then((res) => {
      dispatch({ type: 'GET_REPO', payload: res.full_name });
    });
  }, []);

  return (
    <IssueContext.Provider value={{ state, dispatch }}>
      {children}
    </IssueContext.Provider>
  );
}

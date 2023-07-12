import { useEffect } from 'react';
import { useIssue } from '../context/IssueContext';
import { getIssueDetail } from '../api/issue';
import { useNavigate, useParams } from 'react-router-dom';

export const useIssueDetail = () => {
  const { state, dispatch } = useIssue();
  const { number } = useParams();
  const navigate = useNavigate();

  const issueNumber = parseInt(number);

  useEffect(() => {
    if (state.issue.number !== issueNumber) {
      getIssueDetail(state.owner, state.repo, number)
        .then((res) => {
          dispatch({ type: 'GET_ISSUE', payload: res });
        })
        .catch((err) =>
          navigate('/error', { state: { errorStatus: err.status } })
        );
    }
  }, [
    dispatch,
    issueNumber,
    navigate,
    number,
    state.issue.number,
    state.owner,
    state.repo,
  ]);

  return { issue: state.issue, issueNumber };
};

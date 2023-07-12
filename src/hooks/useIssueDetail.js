import { useEffect } from 'react';
import { getIssueDetail } from '../apis/issue';
import { useNavigate, useParams } from 'react-router-dom';

export const useIssueDetail = (state, dispatch) => {
  const { number } = useParams();
  const navigate = useNavigate();

  const issueNumber = parseInt(number);

  useEffect(() => {
    if (state.issue.number !== issueNumber) {
      getIssueDetail(number)
        .then((res) => {
          dispatch({ type: 'GET_ISSUE', payload: res });
        })
        .catch((err) =>
          navigate('/error', { state: { errorStatus: err.status } }),
        );
    }
  }, [dispatch, issueNumber, navigate, number, state.issue.number]);

  return { issueNumber };
};

import { useEffect, useState } from 'react';
import { getIssues } from '../apis/issue';
import { useNavigate } from 'react-router-dom';

export const useIssueList = (page, dispatch) => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    getIssues(page)
      .then((res) => {
        if (page === 1) {
          dispatch({ type: 'INITIAL_ISSUES', payload: res });
        } else {
          dispatch({ type: 'ADD_ISSUES', payload: res });
        }
      })
      .catch((err) =>
        navigate('/error', { state: { errorStatus: err.status } }),
      )
      .finally(() => setLoading(false));
  }, [dispatch, navigate, page]);

  return { loading, dispatch };
};

import { useNavigate } from 'react-router-dom';

export default function useIssueNavigate(dispatch) {
  const navigate = useNavigate();

  const handleDetailClick = (number) => {
    dispatch({ type: 'FIND_ISSUE', payload: number });
    navigate(`/detail/${number}`);
  };

  return { handleDetailClick };
}

import React from 'react';
import { ErrorButton, ErrorContent, ErrorImage, ErrorWarpper } from './style';

import { useLocation, useNavigate } from 'react-router-dom';

function Error() {
  const location = useLocation();
  const navigate = useNavigate();
  const errorStatus = location.state?.errorStatus || 404;

  let errorMessage;
  switch (errorStatus) {
    case 404:
      errorMessage =
        '요청하신 페이지를 찾을 수 없습니다. 입력하신 주소가 정확한지 다시 한번 확인해 주세요.';
      break;
    case 401:
      errorMessage =
        '요청을 처리할 수 없습니다. 입력하신 정보가 올바른지 확인해 주세요.';
      break;
    case 500:
      errorMessage = '서버에 문제가 발생했습니다. 잠시 후 다시 시도해 주세요.';
      break;
    default:
      errorMessage = '알 수 없는 오류가 발생했습니다. 다시 시도해 주세요.';
  }
  return (
    <ErrorWarpper>
      <h1>{errorStatus} Error 🚫</h1>
      <ErrorContent>{errorMessage}</ErrorContent>
      <ErrorButton onClick={() => navigate('/')}>
        메인 페이지로 돌아가기
      </ErrorButton>
      <ErrorImage src="/error.gif" alt="error" />
    </ErrorWarpper>
  );
}

export default Error;

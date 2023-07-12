import styled from 'styled-components';

const ErrorWarpper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  min-width: 320px;
  text-align: center;
`;

const ErrorContent = styled.div`
  margin-top: 14px;
  font-size: 15px;
  line-height: 22px;
  text-align: center;
  white-space: pre-line;
`;

const ErrorButton = styled.button`
  display: block;
  color: var(--blue-color);
  text-decoration: none;
  text-align: center;
  margin: 10px auto 0px;
  padding: 0px;
  background: none;
  border: none;
  cursor: pointer;
`;

const ErrorImage = styled.img`
  margin-block: 32px;
  width: 240px;
`;

export { ErrorWarpper, ErrorContent, ErrorButton, ErrorImage };

import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ButtonContainer = styled.div`
  padding-left: 16px;
`;
const ButtonLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  padding: 17px 18px;
  background-color: #5736a3;
  font-size: 14px;
  color: #ebd8ff;
  text-decoration: none;

  border-radius: 5px;
  border: 1px solid #bbbbbb;

  &:hover,
  :focus {
    background-color: #5cd3a8;
    color: #000;
  }
`;

export { ButtonContainer, ButtonLink };

import styled from 'styled-components';

const BtnWraper = styled.div`
  display: flex;
  justify-content: center;
`;

const Btn = styled.button`
  padding: 8px 16px;
  background-color: #5736a3;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #ebd8ff;
  border: 1px solid #5736a3;
  border-radius: 10px;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 196px;
  padding: 14px 0px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  &:hover,
  &:focus {
    background-color: #5cd3a8;
    color: #000;
  }
`;

export { BtnWraper, Btn };

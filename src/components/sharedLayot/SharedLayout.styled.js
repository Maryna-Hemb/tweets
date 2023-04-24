import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Container = styled.div`
  margin: 0 auto;
  padding: 0;
`;
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 16px;
  border-bottom: 2px solid rgb(166 164 164);

  > nav {
    display: flex;
  }
`;

const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: #5736a3;
    background-color: #5cd3a8;
  }
`;

const Main = styled.main`
  padding: 16px 5px;
`;

export { Container, Header, Link, Main };

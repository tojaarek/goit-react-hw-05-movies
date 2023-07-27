import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1920px;
  margin: 0 auto;
`;

export const Header = styled.header`
  width: 100%;
  margin: 0 auto;
  padding: 25px 25px;
  border-bottom: 2px solid #ba704f;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: #ba704f;
  }
`;

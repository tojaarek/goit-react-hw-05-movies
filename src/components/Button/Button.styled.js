import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  padding: 4px 11px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: 14px;
  border: 2px solid #ba704f;
  margin-right: 25px;

  &:hover,
  &:focus {
    color: white;
    background-color: #ba704f;
  }
`;

export const ButtonBack = styled.button`
  padding: 4px 11px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: 14px;
  border: 2px solid #ba704f;
  margin-right: 25px;
  cursor: pointer;
  background-color: white;

  &:hover,
  &:focus {
    color: white;
    background-color: #ba704f;
  }
`;

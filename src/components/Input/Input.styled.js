import styled from 'styled-components';

export const Field = styled.input`
  padding: 4px 4px;
  width: 250px;
  border-radius: 4px;
  border: 2px solid #ba704f;
  outline: none;
  margin-right: 5px;
`;

export const Button = styled.button`
  padding: 4px 4px;
  border-radius: 4px;
  border: 2px solid #ba704f;
  background-color: #ffffff;
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;

  &:hover,
  &:focus {
    color: white;
    background-color: #ba704f;
  }
`;

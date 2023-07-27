import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 35px;
  list-style: none;
  margin: 45px 0 0 0;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 5px;
  font-size: 14px;
  width: 160px;
  text-align: center;
`;

export const Image = styled.img`
  width: 100px;
  border-radius: 4px;
  margin-bottom: 5px;
`;

export const PlaceholderImage = styled.img`
  width: 100px;
  border-radius: 4px;
  margin-bottom: 5px;
`;

export const Name = styled.p`
  font-weight: 500;
`;

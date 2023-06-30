import styled from '@emotion/styled';

export const UlStyled = styled.ul`
  list-style: none;
  padding: 15px;
  width: 500px;
  border: 2px solid #fe6b8b;
  border-radius: 5px;
  margin: 0 auto 25px auto;
`;

export const LiStyled = styled.li`
  &:not(:first-child) {
    border-top: 1px solid #fe6b8b;
  }
`;

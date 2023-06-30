import styled from '@emotion/styled';

import { TbUserSearch } from 'react-icons/tb';

export const DivStyled = styled.div`
  position: relative;
  padding: 15px;
  width: 500px;
  border: 2px solid #fe6b8b;
  border-radius: 5px;
  margin: 0 auto 25px auto;
`;

export const LabelStyled = styled.label`
  display: block;
  width: 150px;
  margin-bottom: 5px;
  margin-left: 10px;
  color: #fe6b8b;
  user-select: none;
  cursor: pointer;
`;

export const InputStyled = styled.input`
  display: block;
  height: 25px;
  width: 70%;
  padding: 2px 5px;
  border: 1px solid #bdbdbd;
  border-radius: 4px;
  margin-bottom: 0 auto 15px auto;
  padding-left: 10px;
  color: #fe6b8b;

  :focus {
    outline: none;
    border: 1px solid #fe6b8b;
  }

  ::placeholder {
    color: #bdbdbd;
    padding-left: 5px;
  }
`;

export const SvgStyled = styled(TbUserSearch)`
  position: absolute;
  fill: #fff;
  color: #bdbdbd;
  top: 64%;
  left: 64%;
  right: 10px;
  transform: translateY(-50%);
`;

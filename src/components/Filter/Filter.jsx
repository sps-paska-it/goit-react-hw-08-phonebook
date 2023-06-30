import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { nanoid } from 'nanoid';

import { selectFilter } from 'redux/filter/selectors';
import { setFilter } from 'redux/filter/filterSlise';
import {
  DivStyled,
  InputStyled,
  LabelStyled,
  SvgStyled,
} from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const filterId = nanoid();

  const onHandleChangeFilter = e => {
    dispatch(setFilter(e.target.value.trim()));
  };

  return (
    <DivStyled>
      <LabelStyled htmlFor={filterId}>Find contacts by me</LabelStyled>
      <InputStyled
        id={filterId}
        type="text"
        name="filter"
        value={filter}
        pattern="^[a-zA-Zа-яіїєґА-ЯІЇЄҐ]+(([' -][a-zA-Zа-яіїєґА-ЯІЇЄҐ ])?[a-zA-Zа-яіїєґА-ЯІЇЄҐ]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        placeholder="Search by name ..."
        maxLength={10}
        required
        autoComplete="off"
        onChange={onHandleChangeFilter}
      />
      <SvgStyled />
    </DivStyled>
  );
};

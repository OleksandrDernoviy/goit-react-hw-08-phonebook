import React from 'react';
import { useDispatch } from 'react-redux';
// import { selectFilter } from 'store/selectors';
import css from './filter.module.css';
import '../../index.css';
import { actionFilter } from 'store/contacts/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  return (
    <>
      <label className={css.filterLabel} htmlFor="search">
        Find contacts by name
      </label>
      <input
        className={css.filterInput}
        id="search"
        type="text"
        name="filter"
        onChange={e => dispatch(actionFilter(e.currentTarget.value))}
      />
    </>
  );
};

export default Filter;

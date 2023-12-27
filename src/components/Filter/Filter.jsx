// import React from 'react';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

// import { selectFilter } from 'store/selectors';
import css from './filter.module.css';
import '../../index.css';
import { actionFilter } from 'store/contacts/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const [isInputFocused, setIsInputFocused] = useState(false);
  return (
    <>
      {/* <label className={css.filterLabel} htmlFor="search"> */}
      <label
        className={`${css.filterLabel} ${isInputFocused ? css.focused : ''}`}
        htmlFor="search"
      >
        Find contacts by name
      </label>
      <input
        className={css.filterInput}
        id="search"
        type="text"
        name="filter"
        onChange={e => dispatch(actionFilter(e.currentTarget.value))}
        onFocus={() => setIsInputFocused(true)}
        onBlur={() => setIsInputFocused(false)}
      />
    </>
  );
};

export default Filter;


      
import React from 'react';
import css from './filter.module.css'
import '../../index.css';
const Filter = ({ filter, handleFilterChange }) => (
  <>
    <label className={css.filterLabel} htmlFor="search">Find contacts by name</label>
    <input
      className={css.filterInput}
      id="search"
      type="text"
      name="filter"
      value={filter}
      onChange={handleFilterChange}
    />
  </>
);

export default Filter;
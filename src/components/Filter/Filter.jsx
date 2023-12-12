import React from 'react';
import { useDispatch } from 'react-redux';
import css from './filter.module.css'
import '../../index.css';
import { setFilter } from 'store/filterSlice';
// { filter, handleFilterChange }
const Filter = () => {
  // const filter = useSelector(state => state.filter);
  const dispatch = useDispatch()
  return(
  <>
    <label className={css.filterLabel} htmlFor="search">Find contacts by name</label>
    <input
      className={css.filterInput}
      id="search"
      type="text"
      name="filter"
      // value={filter}
      onChange={(e) => dispatch(setFilter(e.currentTarget.value))}
    />
  </>
)}

export default Filter;
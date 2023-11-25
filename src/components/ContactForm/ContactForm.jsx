import React from 'react';
import css from './contactForm.module.css';
import '../../index.css'
import { useState } from 'react';

const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onAddContact({ name, number });
    setName('');
    setNumber('');
  };
  
  const handleChange = ({ target: { name, value } }) => {
    if (name === 'name') { return setName(value) }
    if (name === 'number') { return setNumber(value) }
  };
  

  return (
    <form className={css.phoneBookForm} onSubmit={handleSubmit}>
        <label htmlFor="checkName">Name</label>
         <input
        className={css.phoneBookInput}
        id="checkName"
        type="text"
        name="name"
        required
        value={name}
        onChange={handleChange}
      />
      <label htmlFor="phoneNumber">Number</label>
      <input
        className={css.phoneBookInput}
        id="phoneNumber"
        type="tel"
        pattern="[0-9]*"
        name="number"
        required
        value={number}
        onChange={handleChange}
      />
      <button className={css.phoneBookFormBtn} type="submit">
        Add Contact
      </button>
    </form>
  )
}


export default ContactForm;

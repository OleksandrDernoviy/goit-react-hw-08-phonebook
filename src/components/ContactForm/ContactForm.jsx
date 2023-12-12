
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContact } from '../../store/contactSlice';
import css from './contactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    handleAddContact({ name, number });
    setName('');
    setNumber('');
  };

  const handleAddContact = ({ name, number }) => {
    const sameName = contacts.find(
      el => el.name.toLowerCase() === name.toLowerCase()
    );
    if (sameName) {
      alert(`${sameName.name} is already in contacts.`);
      return;
    }
    dispatch(addContact({ id: nanoid(), name, number }));
  };

  const handleChange = ({ target: { name, value } }) => {
    if (name === 'name') {
      return setName(value);
    }
    if (name === 'number') {
      return setNumber(value);
    }
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
  );
};

export default ContactForm;
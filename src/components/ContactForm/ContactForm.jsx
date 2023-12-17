
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContacts } from '../../store/operations';
import { selectContacts } from '../../store/selectors';
import css from './contactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    handleAddContact({ name, phone });
    setName('');
    setPhone('');
  };
  

  const handleAddContact = ({ name, phone }) => {
    const sameName = contacts.find(
      el => el.name.toLowerCase() === name.toLowerCase()
    );
    if (sameName) {
      alert(`${sameName.name} is already in contacts.`);
      return;
    }
    dispatch(addContacts({ id: nanoid(), name, phone }));
  };


  const handleChange = e => {
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'phone':
        setPhone(e.currentTarget.value);
        break;
      default:
        return;
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
        name="phone"
        required
        value={phone}
        onChange={handleChange}
      />
      <button className={css.phoneBookFormBtn} type="submit">
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;


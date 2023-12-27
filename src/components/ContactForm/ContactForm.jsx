import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContacts } from '../../store/contacts/contactsOperations';
import { selectContacts } from '../../store/contacts/contactsSelectors';
import css from './contactForm.module.css';

  const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [name, setName] = useState('');
  const [number, setPhone] = useState('');
  const [isInputFocused, setIsInputFocused] = useState(false);
    

  const handleSubmit = e => {
    e.preventDefault();
    handleAddContact({ name, number });
    setName('');
    setPhone('');
  };

  const handleAddContact = ({ name, number }) => {
    const sameName = contacts.find(
      el => el.name.toLowerCase() === name.toLowerCase()
    );
    if (sameName) {
      alert(`${sameName.name} is already in contacts.`);
      return;
    }
    dispatch(addContacts({ id: nanoid(), name, number }));
  };

  const handleChange = e => {
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'number':
        setPhone(e.currentTarget.value);
        break;
      default:
        return;
    }
  };

  return (
    <form className={css.phoneBookForm} onSubmit={handleSubmit}>
      <h1
        className={`${css.phoneBookFormTitle} ${
          isInputFocused ? css.focusedContact : ''
        }`}
      >
        Phonebook
      </h1>
      <label htmlFor="checkName">Name</label>
      <input
        className={css.phoneBookInput}
        id="checkName"
        type="text"
        name="name"
        required
        value={name}
        onChange={handleChange}
        onFocus={() => setIsInputFocused(true)}
        onBlur={() => setIsInputFocused(false)}
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
        onFocus={() => setIsInputFocused(true)}
        onBlur={() => setIsInputFocused(false)}
      />
      <button className={css.phoneBookFormBtn} type="submit">
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;

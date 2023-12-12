
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import css from './app.module.css';
import '../../index.css';
import React from 'react'

export const App = () => {
  
  return (
    <div className={css.phonebookBox}>
      <h1 className={css.phonebookTitle}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.contactsTitle}>Contacts</h2>
      <Filter/>
      <ContactList />
    </div>
  );
}
 
export default App;


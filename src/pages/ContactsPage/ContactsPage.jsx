import ContactForm  from 'components/ContactForm/ContactForm'
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import css from './contactsPage.module.css'

import React from 'react'

const ContactsPage = () => {
  return (
    <div className={css.phonebookBox}>
      <div className={css.phonebookFormBox}>
        {/* <h1 className={css.phonebookTitle}>Phonebook</h1> */}
        <ContactForm />
        <h2 className={css.contactsTitle}>Contacts</h2>
        <Filter />
      </div>
      <ContactList />
    </div>
  );
}

export default ContactsPage
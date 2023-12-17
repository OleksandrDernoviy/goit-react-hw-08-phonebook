import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import css from './app.module.css';
import '../../index.css';


export const App = () => {
  return (
    <div className={css.phonebookBox}>
      <h1 className={css.phonebookTitle}>Phonebook</h1>
      <h2 className={css.contactsTitle}>Contacts</h2>    
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;

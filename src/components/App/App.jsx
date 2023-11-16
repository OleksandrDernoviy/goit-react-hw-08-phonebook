
import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import css from './app.module.css';
import '../../index.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleAddContact = ({ name, number }) => {
    const sameName = this.state.contacts.find(
      el => el.name.toLowerCase() === name.toLowerCase()
    );

    if (sameName) {
      alert(`${sameName.name} is already in contacts.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleFilterChange = e => {
    this.setState({ filter: e.target.value.toLowerCase() });
  };
  handleRemoveContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
  componentDidMount() {
    // console.log('App componentDidMount');
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
    // this.setState({ contacts: parsedContacts });
    // console.log(parsedContacts);
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('App componentDidUpdate');
    if (this.state.contacts !== prevState.contacts) {
      // console.log('ДАЙТЕ ЧАЮ !!!!!');
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { contacts, filter } = this.state;
    const filterContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div className={css.phonebookBox}>
        <h1 className={css.phonebookTitle}>Phonebook</h1>
        <ContactForm onAddContact={this.handleAddContact} />
        <h2 className={css.contactsTitle}>Contacts</h2>
        <Filter filter={filter} handleFilterChange={this.handleFilterChange} />
        <ContactList
          contacts={filterContacts}
          onRemoveContact={this.handleRemoveContact}
        />
      </div>
    );
  }
}

export default App;

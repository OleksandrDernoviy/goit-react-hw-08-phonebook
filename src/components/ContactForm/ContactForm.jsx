import React, { Component } from 'react';
import css from './contactForm.module.css';
import '../../index.css'

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.onAddContact({ name, number });
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={css.phoneBookForm} onSubmit={this.handleSubmit}>
        <label htmlFor="checkName">Name</label>
        <input
          className={css.phoneBookInput}
          id="checkName"
          type="text"
          name="name"
          required
          value={name}
          onChange={this.handleChange}
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
          onChange={this.handleChange}
        />
        <button className={css.phoneBookFormBtn} type="submit">
          Add Contact
        </button>
      </form>
    );
  }
}

export default ContactForm;

import React from "react";
import css from './contactList.module.css'
import '../../index.css'


const ContactList = ({ contacts, onRemoveContact }) => (
  <ul className={css.contactList}>
    {contacts.map(({ id, name, number }) => (
      <li className={css.contactListItem} key={id}>
        <p className={css.contactItemView}>
          {name}: {formatNumber(number)}
        </p>
        <button
          className={css.contactDelBtn}
          type="button"
          name="delete"
          onClick={() => onRemoveContact(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

const formatNumber = number => {
  return number.replace(/(\d{3})(\d{2})(\d{2})/, '$1-$2-$3');
};


export default ContactList

        






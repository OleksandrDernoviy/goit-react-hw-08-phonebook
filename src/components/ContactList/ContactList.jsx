import { useSelector, useDispatch } from 'react-redux'
import {removeContact} from '../../store/contactSlice'
import css from './contactList.module.css'
import '../../index.css'

const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.contactList}>
      {filterContacts.map(({ id, name, number }) => (
        <li className={css.contactListItem} key={id}>
          <p className={css.contactItemView}>
            {name}: {formatNumber(number)}
          </p>
          <button
            className={css.contactDelBtn}
            type="button"
            name="delete"
            onClick={() => dispatch(removeContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
const formatNumber = number => {
  return number.replace(/(\d{3})(\d{2})(\d{2})/, '$1-$2-$3');
 };
export default ContactList

        






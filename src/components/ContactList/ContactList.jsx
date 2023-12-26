import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../store/contacts/contactsOperations';
import { useEffect } from 'react';
import { fetchContacts } from '../../store/contacts/contactsOperations';
import {
  selectIsLoading,
  selectError,
  selectFilterContacts,
} from '../../store/contacts/contactsSelectors';
import css from './contactList.module.css';
import '../../index.css';

const ContactList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filterContacts = useSelector(selectFilterContacts);

  return (
    <>
      {isLoading && <p>Loading tasks...</p>}
      {error && <p>{error}</p>}
      {filterContacts.length > 0 && (
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
                onClick={() => dispatch(deleteContact(id))}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
const formatNumber = number => {
  return number.replace(/(\d{3})(\d{2})(\d{2})/, '$1-$2-$3');
};
export default ContactList;

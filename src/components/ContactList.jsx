import { useSelector } from 'react-redux';
import { getContacts } from '../redux/selectors';
import PropTypes from 'prop-types';
import css from '../styles/ContactList.module.css';

export const ContactList = (
  {
    // contacts,
    // filter,
    // deleteContact
  }
) => {
  // const filteredContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

  const contacts = useSelector(getContacts);

  return (
    <ul className={css.list}>
      {contacts.map(contact => (
        <li className={css.listItem} key={contact.id}>
          <div className={css.text}>
            <p className={css.paragraph}>{contact.name}</p>
            <p className={css.paragraph}>{contact.number}</p>
          </div>
          {/* <button
            className={css.button}
            type="button"
            onClick={() => deleteContact(contact.id)}
          >
            Delete
          </button> */}
        </li>
      ))}
    </ul>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.array.isRequired,
//   filter: PropTypes.string.isRequired,
//   deleteContact: PropTypes.func.isRequired,
// };

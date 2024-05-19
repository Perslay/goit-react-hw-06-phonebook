import { useSelector } from 'react-redux';
import { getContacts } from '../redux/selectors';
import { Contact } from './Contact';
// import PropTypes from 'prop-types';
import css from '../styles/ContactList.module.css';

export const ContactList = () =>
  // {
  // contacts,
  // filter,
  // deleteContact
  // }
  {
    // const filteredContacts = contacts.filter(contact =>
    //   contact.name.toLowerCase().includes(filter.toLowerCase())
    // );

    const contacts = useSelector(getContacts);

    return (
      <ul className={css.list}>
        {contacts.map(contact => (
          <li className={css.listItem} key={contact.id}>
            <Contact contact={contact} />
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

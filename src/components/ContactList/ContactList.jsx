import React from "react";
import PropTypes from "prop-types";
import s from "./ContactList.module.css";

const ContactList = ({ contacts, onRemoveContact }) => (
  <ul className={s.list}>
    {contacts.map(({id, name, number}) => (
      <li className = {s.item} key={id}>
        {name} : {number}
        {
          <button
            className={s.button}
            type="button"
            onClick={() => onRemoveContact(id)}
          >
            Delete
          </button>
        }
      </li>
    ))}
  </ul>
);

ContactList.defaultProps = {
    contacts: [],
}

ContactList.propTypes = {
  onRemoveContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
  })),
}
export default ContactList;

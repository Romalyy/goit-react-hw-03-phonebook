import React from "react";
import PropTypes from "prop-types";

import s from "../ContactForm/ContactForm.module.css";

export default function Filter({ value, onChangeFilter }) {
  return (
    <div>
      <label className={s.label}>
        Find contacts by name
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={(e) => onChangeFilter(e.target.value)}
      />
      </label>
    </div>
  );
}


Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onchangeFilter: PropTypes.func,
};

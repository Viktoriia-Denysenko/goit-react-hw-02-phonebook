import React from 'react';
import s from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <div className={s.filterBox}>
      <label className={s.label}>Find contacts by name</label>
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Filter;

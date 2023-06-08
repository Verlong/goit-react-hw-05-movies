import React, { useState } from 'react';
import css from './SearchBar.module.css';

const Searchbar = ({ getInputValue }) => {
  const [input, setInput] = useState('');

  const search = e => {
    e.preventDefault();
    getInputValue(input);
    setInput('');
  };

  const handleChange = e => {
    setInput(e.target.value);
  };

  return (
    <form className={css.form} onSubmit={search}>
      <button type="submit" className={css.button}>
        <span className={css.label}>Search</span>
      </button>

      <input
        name="input"
        type="text"
        autoComplete="off"
        onChange={handleChange}
        value={input}
        autoFocus
        placeholder="Search movie"
        className={css.input}
      />
    </form>
  );
};

export default Searchbar;

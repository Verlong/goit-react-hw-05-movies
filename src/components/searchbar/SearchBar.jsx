import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import css from './SearchBar.module.css';

const Searchbar = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   onSubmit(input);
  //   setInput('');
  // };

  // const handleChange = e => {
  //   setInput(e.target.value);
  // };

  return (
    <form onSubmit={onSubmit}>
      {/* <form onSubmit={handleSubmit}> */}
      <button type="submit">
        <span>Search</span>
      </button>
      <input
        type="text"
        name="movieName"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="May contain only letters, apostrophe, dash and spaces. For example moon"
        required
        autoComplete="off"
        autoFocus
        placeholder="Search movie..."
        // alue={input}
        // onChange={handleChange}
      />
    </form>
  );
};

export default Searchbar;

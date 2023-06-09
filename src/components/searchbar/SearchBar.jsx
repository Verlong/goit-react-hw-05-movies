import React from 'react';
import css from './SearchBar.module.css';

const Searchbar = ({ onSubmit }) => {
  // const [input, setInput] = useState('');

  return (
    <form onSubmit={onSubmit} className={css.form}>
      <input
        type="text"
        name="movieName"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="May contain only letters, apostrophe, dash and spaces. For example moon"
        required
        autoComplete="off"
        autoFocus
        placeholder="Search movie..."
        className={css.searchInput}
      />
      <button type="submit" className={css.searchBtn}>
        <span>Search</span>
      </button>
    </form>
  );
};

export default Searchbar;

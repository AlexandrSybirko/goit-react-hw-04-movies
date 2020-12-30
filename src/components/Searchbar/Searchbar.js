import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import s from './Searchbar.module.css';

export default function Searchbar({ onSubmit }) {
    const [moviesName, setMoviesName] = useState('');
    
    const handleChange = e => {
    
    setMoviesName(e.currentTarget.value.toLowerCase())
  }

  const handleSubmit = event => {
    event.preventDefault();

    if (moviesName.trim() === '') {
      toast('Please enter search query');
      return;
    }

    onSubmit(moviesName);

    setMoviesName('');
  };

  return (
     <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={handleSubmit}>
          <button type="submit" className={s.SearchFormButton}>
           <span className={s.SearchFormButtonLabel}>Search</span>
          </button>
        <input
          value={moviesName}
          onChange={handleChange}
          className={s.searchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />             
        </form>
      </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};


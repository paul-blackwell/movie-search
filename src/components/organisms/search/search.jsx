import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import styles from './search.module.scss';
import containsSpecialChars from '../../../utils/containsSpecialChars';
import InputWithLabel from '../../molecules/input-with-label/input-with-label';
import SelectWithLabel from '../../molecules/select-with-label/select-with-label';
import ButtonPrimary from '../../atoms/button-primary/button-primary';
import ButtonTertiary from '../../atoms/button-tertiary/button-tertiary';

const Search = ({ className }) => {
  // This will handle our input state and change
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (e) => setInputValue(e.target.value);

  // This will handle our select state and change
  const [selectValue, setSelectValue] = useState('movie');
  const handleSelectChange = (e) => setSelectValue(e.target.value);

  // Get current route
  const currentRoute = useLocation().pathname;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // This will clear our search form
  const clearForm = () => {
    setInputValue('');
    setSelectValue('movie');
  };

  // This clearing our search when the clear button is clicked
  const handleClear = () => clearForm();

  // This will handle our input validation
  const validatedInput = (input) => {
    if (input === '') return { valid: false, errorMessage: 'Please enter a movie' };
    if (containsSpecialChars(input)) return { valid: false, errorMessage: 'Movie must not have special characters' };
    return { valid: true, errorMessage: '' };
  };

  // This will handle our form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Run our input validation
    const { valid, errorMessage } = validatedInput(inputValue);

    // Validate input value, if not valid update search store
    if (!valid) {
      dispatch({
        type: 'SET_SEARCH',
        payload: {
          currentSearch: {
            isValidSearch: valid,
            errorMessage,
            search: '',
            type: '',
          },
        },
      });
    }

    // if valid search:
    if (valid) {
      dispatch({
        type: 'SET_SEARCH',
        payload: {
          currentSearch: {
            isValidSearch: valid,
            errorMessage,
            search: inputValue,
            type: selectValue,
          },
        },
      });
    }

    // clear the form
    clearForm();

    // If not already on the search page navigate to it
    if (currentRoute !== '/search-results') {
      navigate('/search-results');
    }
  };

  return (
    <form className={`${styles.search} ${className}`}>
      <InputWithLabel
        className={styles.search__input}
        type="text"
        placeholder="Search by title"
        value={inputValue}
        handleChange={handleInputChange}
      >
        <FiSearch className={styles.search__icon} />
      </InputWithLabel>
      <SelectWithLabel
        className={styles.search__select}
        label="Type:"
        value={selectValue}
        onChange={handleSelectChange}
        options={[
          { value: 'movie', name: 'Movie' },
          { value: 'series', name: 'Series' },
          { value: 'episode', name: 'Episode' },
        ]}
      />
      <div className={styles['search__button-group']}>
        <ButtonTertiary
          className={styles.search__button}
          onClick={handleClear}
        >
          Clear
        </ButtonTertiary>
        <ButtonPrimary type="submit" onClick={handleSubmit}>
          Search
        </ButtonPrimary>
      </div>
    </form>
  );
};

Search.propTypes = {
  className: PropTypes.string,
};

Search.defaultProps = {
  className: '',
};

export default Search;

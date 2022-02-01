import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FiSearch } from 'react-icons/fi';
import styles from './search.module.scss';
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

  // This will handle clearing our search
  const handleClear = () => {
    setInputValue('');
    setSelectValue('movie');
  };

  // Just for testing
  useEffect(() => { console.log(inputValue); }, [inputValue]);
  useEffect(() => { console.log(selectValue); }, [selectValue]);

  return (
    <div className={`${styles.search} ${className}`}>
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
        <ButtonPrimary onClick={() => console.log('Button primary was clicked')}>Search</ButtonPrimary>
      </div>
    </div>
  );
};

Search.propTypes = {
  className: PropTypes.string,
};

Search.defaultProps = {
  className: '',
};

export default Search;

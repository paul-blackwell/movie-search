import React from "react";
import PropTypes from "prop-types";
import styles from "../search/search.module.scss";
import { FiSearch } from "react-icons/fi";
import InputWithLabel from "../input-with-label/input-with-label";
import SelectWithLabel from "../select-with-label/select-with-label";
import ButtonPrimary from "../../atoms/button-primary/button-primary";

const Search = ({className}) => (
  <div className={`${styles.search} ${className}`}>
    <InputWithLabel
      type="text"
      placeholder="Search by title"
      value=""
      handleChange={() => console.log("I changed")}
    >
      <FiSearch className={styles["search__icon"]} />
    </InputWithLabel>
    <SelectWithLabel
      label="Type:"
      options={[
        { value: "movie", name: "Movie" },
        { value: "series", name: "Series" },
        { value: "episode", name: "Episode" },
      ]}
    />
    <div className={styles['search__button-group']}>
      <ButtonPrimary>Search</ButtonPrimary>
    </div>
  </div>
);

Search.propTypes = {
  className: PropTypes.string,
};


Search.defaultProps = {
  className: '',
};

export default Search;

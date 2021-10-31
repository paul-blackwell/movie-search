import React from "react";
import PropTypes from "prop-types";
import styles from "../search/search.module.scss";
import { FiSearch } from "react-icons/fi";
import InputWithLabel from "../../molecules/input-with-label/input-with-label";
import SelectWithLabel from "../../molecules/select-with-label/select-with-label";
import ButtonPrimary from "../../atoms/button-primary/button-primary";
import ButtonTertiary from "../../atoms/button-tertiary/button-tertiary";


const Search = ({ className }) => (
  <div className={`${styles.search} ${className}`}>
    <InputWithLabel
    className={styles["search__input"]}
      type="text"
      placeholder="Search by title"
      value=""
      handleChange={() => console.log("I changed")}
    >
      <FiSearch className={styles["search__icon"]} />
    </InputWithLabel>
    <SelectWithLabel
      className={styles["search__select"]}
      label="Type:"
      options={[
        { value: "movie", name: "Movie" },
        { value: "series", name: "Series" },
        { value: "episode", name: "Episode" },
      ]}
    />
    <div className={styles["search__button-group"]}>
    <ButtonTertiary className={styles["search__button"]} onClick={()=> console.log('Button tertiary was clicked')}>Clear</ButtonTertiary>
      <ButtonPrimary onClick={()=> console.log('Button primary was clicked')}>Search</ButtonPrimary>
    </div>
  </div>
);

Search.propTypes = {
  className: PropTypes.string,
};

Search.defaultProps = {
  className: "",
};

export default Search;

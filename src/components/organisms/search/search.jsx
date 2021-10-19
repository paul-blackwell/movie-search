import React from "react";
import styles from "../search/search.module.scss";
import { FiSearch } from "react-icons/fi";
import InputWithLabel from "../../molecules/input-with-label/input-with-label";

const Search = () => (
  <div className={styles.search}>
    <InputWithLabel
      type="text"
      placeholder="Search by title"
      value=""
      handleChange={() => console.log("I changed")}
    >
      <FiSearch className={styles["search__icon"]} />
    </InputWithLabel>
  </div>
);

export default Search;

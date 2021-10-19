import React from "react";
import styles from "../search/search.module.scss";
import { FiSearch } from "react-icons/fi";
import InputWithLabel from "../../molecules/input-with-label/input-with-label";
import SelectWithLabel from "../../molecules/select-with-label/select-with-label";

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
    <SelectWithLabel
      label="Type:"
      options={[
        { value: "movie", name: "Movie" },
        { value: "series", name: "Series" },
        { value: "episode", name: "Episode" },
      ]}
    />
  </div>
);

export default Search;

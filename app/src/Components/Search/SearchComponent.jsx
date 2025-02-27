// import React, { useState } from "react";
import styles from "./SearchComponent.module.css";

export default function SearchComponent({
  filterName,
  setFilterName,
  searchName,
  setSearchName,
}) {
  //   const [name, setName] = useState("");
  const handleChange = (e) => {
    const newText = e.target.value;
    const capitalizedInitial =
      newText.charAt(0).toUpperCase() + newText.slice(1);
    setFilterName(capitalizedInitial);
    setSearchName(e.target.value);
    // console.log("newText::", newText);
    // console.log("capitalizedInitial::", capitalizedInitial);
  };
  return (
    <div className={styles.searchContainer}>
      <input
        value={searchName}
        type="text"
        name=""
        id=""
        placeholder="Search for countries..."
        style={{ width: "100%", height: "100%" }}
        onChange={handleChange}
      />
    </div>
  );
}

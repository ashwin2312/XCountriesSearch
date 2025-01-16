// import React, { useState } from "react";
import styles from "./SearchComponent.module.css";

export default function SearchComponent({ filterName, setFilterName }) {
  //   const [name, setName] = useState("");
  const handleChange = (e) => {
    setFilterName(e.target.value);
    console.log("filtername::", filterName);
  };
  return (
    <div className={styles.searchContainer}>
      <input
        value={filterName}
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

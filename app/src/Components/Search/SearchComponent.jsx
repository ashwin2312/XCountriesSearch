import React, { useState } from "react";
import styles from "./SearchComponent.module.css";

export default function SearchComponent({ filterName, setFilterName }) {
  //   const [name, setName] = useState("");
  return (
    <div className={styles.searchContainer}>
      <input
        value={filterName}
        type="text"
        name=""
        id=""
        placeholder="Search for countries"
        style={{ width: "100%", height: "100%" }}
        onChange={(e) => setFilterName(e.target.value)}
      />
    </div>
  );
}

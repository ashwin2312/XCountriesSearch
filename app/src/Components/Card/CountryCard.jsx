import React from "react";
import styles from "./CountryCard.module.css";

export default function CountryCard(countryName, countryImage) {
  //   console.log("name::", countryName);
//   console.log("image::", countryImage);
  return (
    <div className={styles.countryCard}>
      <div className={styles.imageContainer}>
        <img
          src={countryName.countryImage}
          alt="country image"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div>
        {/* <p>Country name</p> */}
        <h3>{countryName.countryName}</h3>
      </div>
    </div>
  );
}

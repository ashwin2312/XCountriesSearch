import React from "react";
import "./CountryCard.css";

export default function CountryCard(countryName, countryImage) {
  //   console.log("name::", countryName);
  //   console.log("image::", countryImage);
  return (
    <div className="countryCard">
      <div className="imageContainer">
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

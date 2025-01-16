import React, { useEffect, useState } from "react";
import SearchComponent from "../Search/SearchComponent";
import CountryCard from "../Card/CountryCard";
import styles from "./Countries.module.css";

export default function Countries() {
  const [countryList, setCountryList] = useState([]);
  const [filterName, setFilterName] = useState();

  const API =
    "https://countries-search-data-prod-812920491762.asia-south1.run.app/countries";

  const getCountries = async () => {
    try {
      const response = await fetch(API);
      const data = await response.json();
      // console.log("data::", data);
      setCountryList(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  const filteredCountries = countryList.filter((country) =>
    country.common.includes(filterName)
  );

  //   console.log("countryList::", countryList);

  return (
    <div className={styles.container}>
      <SearchComponent filterName={filterName} setFilterName={setFilterName} />
      {!filterName ? (
        <div className={styles.countryListContainer}>
          {countryList.map((country) => {
            //   console.log("country.common::", country.common);
            return (
              <CountryCard
                key={country.common}
                countryName={country.common}
                countryImage={country.png}
              />
            );
          })}
        </div>
      ) : (
        <div style={{ display: "flex", gap: "1rem" }}>
          {filteredCountries.map((country) => {
            return (
              <CountryCard
                key={country.common}
                countryName={country.common}
                countryImage={country.png}
              />
            );
          })}
          <CountryCard />
        </div>
      )}
    </div>
  );
}

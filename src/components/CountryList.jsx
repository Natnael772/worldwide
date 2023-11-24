import React, { useEffect } from "react";
import styles from "./CountryList.module.css";

import CountryItem from "./CountryItem";

export default function CountryList({ cities, isLoading }) {
  const countries = [];

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.id} />
      ))}
    </ul>
  );
}

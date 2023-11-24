import React from "react";
import styles from "./CountryItem.module.css";

export default function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span>{country.emoji}</span>
      <h3>{country.country}</h3>
    </li>
  );
}

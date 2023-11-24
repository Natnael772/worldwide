import React, { useEffect } from "react";
import styles from "./CountryList.module.css";

export default function CountryList({ cities }) {
  return <ul className={styles.countryList}></ul>;
}

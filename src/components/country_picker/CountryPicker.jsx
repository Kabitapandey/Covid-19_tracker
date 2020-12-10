import React, { useState, useEffect } from "react";
import { fetchCountries } from "../../api";
import { FormControl, NativeSelect } from "@material-ui/core";
import styles from "./CountryPicker.module.css";

function CountryPicker({ handleCountries }) {
  const [fetchedCountry, setfetchedCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setfetchedCountries(await fetchCountries());
    };
    fetchAPI();
  }, [setfetchedCountries]);

  return (
    <div className={styles.container}>
      <FormControl>
        <NativeSelect onChange={(e) => handleCountries(e.target.value)}>
          <option value="">Global</option>
          {/* fetching country names */}
          {fetchedCountry.map((country, i) => {
            return (
              <option key={i} value={country}>
                {" "}
                {country}
              </option>
            );
          })}
        </NativeSelect>
      </FormControl>
    </div>
  );
}

export default CountryPicker;

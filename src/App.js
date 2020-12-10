import React, { Component } from "react";
import { fetchedData } from "./api";
import { Cards, CountryPicker, Chart } from "./components";
import styles from "./App.module.css";
import coronaImg from "./img/image.png";

class App extends Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchData = await fetchedData();
    this.setState({
      data: fetchData,
    });
  }

  handleCountries = async (country) => {
    this.setState({
      data: await fetchedData(country),
      country: country,
    });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img src={coronaImg} alt="" />
        <Cards data={data} />
        <CountryPicker handleCountries={this.handleCountries} />
        <Chart country={country} data={data} />
      </div>
    );
  }
}

export default App;

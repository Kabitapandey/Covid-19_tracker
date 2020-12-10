import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchedData = async (country) => {
  let modifiedUrl = url;

  if (country) {
    modifiedUrl = `${url}/countries/${country}`;
  }
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(modifiedUrl);
    const modifiedData = { confirmed, recovered, deaths, lastUpdate };
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);

    const modifiedData = countries.map((country) => {
      return country.name;
    });

    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

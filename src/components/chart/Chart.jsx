import React, { useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
import { fetchDailyData, fetchedData } from "../../api";
import styles from "./Chart.module.css";

function Chart({ country, data: { confirmed, recovered, deaths } }) {
  const [dailyData, setDailyData] = useState([]);

  // useeffect method for fetching api
  useEffect(() => {
    const fetchedAPI = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchedAPI();
  }, []);

  // implementing linechart
  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map((data) => data.date),
        datasets: [
          {
            label: "Infected",
            data: dailyData.map((d) => d.confirmed),
            borderColor: "blue",
            backgroundColor: "rgba(0,0,255,0.5)",
            pointBackgroundColor: "blue",
            pointBorderColor: "black",
          },
          {
            label: "Deaths",
            data: dailyData.map((data) => data.deaths),
            borderColor: "red",
            backgroundColor: "rgba(255,0,0,0.5)",
            pointBackgroundColor: "red",
            pointBorderColor: "black",
          },
        ],
      }}
    />
  ) : null;

  // implementing barchart
  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recoverd", "Deaths"],
        datasets: [
          { label: ["Infected", "Recoverd", "Deaths"] },
          {
            data: [confirmed.value, recovered.value, deaths.value],
            backgroundColor: [
              "rgba(255,0,0,0.5)",
              "rgba(0,255,0,0.5)",
              "rgba(0,0,255,0.5)",
            ],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { text: `Covid-19 cases in ${country}`, display: true },
      }}
    />
  ) : null;

  return (
    <div className={styles.container}>{country ? barChart : lineChart}</div>
  );
}

export default Chart;

import React from "react";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classname";
import styles from "./Card.module.css";

function Cards({ data: { confirmed, recovered, deaths, lastUpdate } }) {
  if (!confirmed) {
    return "Loading....";
  }

  return (
    <div className={styles.container}>
      {/* infected */}
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          className={cx(styles.card, styles.infected)}
          xs={12}
          md={3}
        >
          <CardContent>
            <Typography gutterBottom color="textSecondary">
              Infected
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator=","
              ></CountUp>
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              No of active cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>

        {/* end of infected */}

        {/* recovred */}

        <Grid
          item
          component={Card}
          className={cx(styles.card, styles.recovered)}
          xs={12}
          md={3}
        >
          <CardContent>
            <Typography gutterBottom color="textSecondary">
              Recovered
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.5}
                separator=","
              ></CountUp>
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              No of total recoverd people form COVID-19
            </Typography>
          </CardContent>
        </Grid>

        {/* end of recovered */}

        {/* deaths*/}

        <Grid
          item
          component={Card}
          className={cx(styles.card, styles.deaths)}
          xs={12}
          md={3}
        >
          <CardContent>
            <Typography gutterBottom color="textSecondary">
              Deaths
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.5}
                separator=","
              ></CountUp>
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              No of people died form COVID-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
      {/* end of deaths */}
    </div>
  );
}

export default Cards;

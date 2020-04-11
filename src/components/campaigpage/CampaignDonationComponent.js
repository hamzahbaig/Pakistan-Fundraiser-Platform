import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {  LinearProgress } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const CampaignDonationComponent = (props) => {
  const classes = useStyles();
  return (
    <div>
      <div>
        <Typography
          gutterBottom
          variant="h4"
          component="h2"
          color="primary"
          display="inline"
        >
          {"Rs. " + "7,123,123"}
        </Typography>
        <Typography variant="subtitle1" display="inline" className="ml-2">
          {"raised"}
        </Typography>
      </div>
      <div className="mt-3">
        <LinearProgress
          variant="determinate"
          value={20}
          style={{ height: 12, borderRadius: 2 }}
        />
      </div>
      <div
        className="mt-3"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Typography variant="subtitle1" display="inline">
          {"Goal: Rs.1,000,000"}
        </Typography>
        <Typography variant="subtitle1" display="inline" align="right">
          {"19 Days to go"}
        </Typography>
      </div>
      <div className="mt-2">
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          className={classes.submit}
        >
          DONATE
        </Button>
      </div>
    </div>
  );
};

export default CampaignDonationComponent;

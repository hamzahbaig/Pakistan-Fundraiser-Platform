import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { LinearProgress, Divider } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const CampaignOrganiserDetails = (props) => {
  const classes = useStyles();
  return (
    <div>
      <div>
        <Typography
          gutterBottom
          variant="h6"
          component="h2"
          color="primary"
          display="inline"
        >
          {"Campaign Organiser"}
        </Typography>
      </div>
      <div className="mt-1">
        <Divider />
      </div>
      <div className="mt-1">
        <Typography variant="subtitle1">{"Hamzah Baig"}</Typography>
      </div>
      <div
        className="mt-2"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Typography variant="subtitle1" display="inline">
          {"Time"}
        </Typography>
        <Typography variant="subtitle1" display="inline" align="right">
          {"Lahore"}
        </Typography>
      </div>
    </div>
  );
};

export default CampaignOrganiserDetails;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { LinearProgress, Divider } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import moment from "moment";
const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const CampaignOrganiserDetails = (props) => {
  const classes = useStyles();
  const { campaignOrganiserName, createdAt } = props.campaign;
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
        <Typography variant="subtitle1">
          {campaignOrganiserName}
        </Typography>
      </div>
      <div
        className="mt-1"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Typography variant="subtitle1" display="inline">
          {"Campaign Live at: "}
        </Typography>
        <Typography variant="subtitle1" display="inline" align="right">
          {moment(createdAt.toDate()).subtract(0,"days").calendar()}
        </Typography>
      </div>
    </div>
  );
};

export default CampaignOrganiserDetails;

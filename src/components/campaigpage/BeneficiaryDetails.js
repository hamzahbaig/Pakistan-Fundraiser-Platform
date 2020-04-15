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

const BeneficiaryDetails = (props) => {
  const classes = useStyles();
  let benefeciary = "";
  const { campaignFor } = props.campaign;
  if (campaignFor == "Myself") {
    benefeciary =
      props.campaign.myselfFirstName + " " + props.campaign.myselfLastName;
  } else if (campaignFor == "Project") {
    benefeciary = props.campaign.projectOrganiserName;
  } else if (campaignFor == "Beneficiary") {
    benefeciary =
      props.campaign.beneficiaryFirstName +
      " " +
      props.campaign.benefeciaryLastName;
  }
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
          {"Beneficiary"}
        </Typography>
      </div>
      <div className="mt-1">
        <Divider />
      </div>
      <div className="mt-1">
        <Typography variant="subtitle1">{benefeciary}</Typography>
      </div>
    </div>
  );
};

export default BeneficiaryDetails;

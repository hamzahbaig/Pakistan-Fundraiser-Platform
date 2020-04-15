import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import CampaignDonationComponent from "./CampaignDonationComponent";
import CampaignOrganiserDetails from "./CampaignOrganiserDetails";
import BeneficiaryDetails from "./BeneficiaryDetails";
import Supporters from "./Supporters";
const useStyles = makeStyles((theme) => ({
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
  campaignOrganiserDetails: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
    marginTop: theme.spacing(2),
  },
}));

export default function Sidebar(props) {
  const classes = useStyles();
  const { campaign } = props;

  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={0} className={classes.sidebarAboutBox}>
        <CampaignDonationComponent campaign={campaign} />
      </Paper>
      <Paper elevation={0} className={classes.campaignOrganiserDetails}>
        <CampaignOrganiserDetails campaign={campaign}/>
      </Paper>
      <Paper elevation={0} className={classes.campaignOrganiserDetails}>
        <BeneficiaryDetails campaign={campaign}/>
      </Paper>
      <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
        Supporters
      </Typography>
      <Supporters/>

      {/* {social.map((network) => (
        <Link display="block" variant="body1" href="#" key={network}>
          <Grid container direction="row" spacing={1} alignItems="center">
            <Grid item>
              <network.icon />
            </Grid>
            <Grid item>{network.name}</Grid>
          </Grid>
        </Link>
      ))} */}
    </Grid>
  );
}

Sidebar.propTypes = {
  archives: PropTypes.array,
  description: PropTypes.string,
  social: PropTypes.array,
  title: PropTypes.string,
};

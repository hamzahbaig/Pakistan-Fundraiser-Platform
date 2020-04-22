import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { LinearProgress } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import moment from "moment";
import { addToBasket } from "../../store/actions/checkoutActions";
import { connect } from "react-redux";

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const CampaignDonationComponent = (props) => {
  const classes = useStyles();
  console.log(props, "ABC");
  const { amount, expiry, amountRaised } = props.campaign;
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
          {"Rs. " + numberWithCommas(amountRaised)}
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
          {"Goal: " + numberWithCommas(amount)}
        </Typography>
        <Typography variant="subtitle1" display="inline" align="right">
          {"Expires: " + moment(expiry.toDate()).format("MMM Do YYYY")}
        </Typography>
      </div>
      <div className="mt-2">
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          className={classes.submit}
          onClick={() =>
            props.addToBasket(props.campaign, props.campaign.campaignId)
          }
          href="/checkout"
        >
          DONATE
        </Button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToBasket: (campaign, id) => dispatch(addToBasket(campaign, id)),
  };
};
export default connect(null, mapDispatchToProps)(CampaignDonationComponent);

import React from "react";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { Divider, LinearProgress } from "@material-ui/core";
import { Link } from "@material-ui/core";

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const CheckoutCard = ({ campaign, currentAmountRaised }) => {
  const classes = useStyles();
  return (
    <Link href={"/campaigns/" + campaign.id} style={{ textDecoration: "none" }}>
      <Card className={classes.card} elevation={2}>
        <CardMedia
          className={classes.cardMedia}
          image="https://source.unsplash.com/random"
          title="Cover Photo"
        />
        <CardContent className={classes.cardContent}>
          <Typography
            className="mt-1"
            gutterBottom
            variant="subtitle1"
            component="h1"
            align="center"
          >
            {campaign.campaignTitle}
          </Typography>
          <div
            className="mt-1"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography
              gutterBottom
              variant="subtitle1"
              component="h2"
              align="center"
              color="primary"
              display="inline"
            >
              {"Rs. " + numberWithCommas(campaign.amount)}
            </Typography>
            <Typography
              gutterBottom
              variant="subtitle1"
              component="h2"
              align="center"
              color="textSecondary"
              display="inline"
            >
              {`Rs. ${numberWithCommas(
                campaign.amountRaised + currentAmountRaised
              )}`}
            </Typography>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CheckoutCard;

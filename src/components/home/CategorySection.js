import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import { connect, useSelector } from "react-redux";
import { compose } from "redux";
import CampaignList from "./CampaignList";
import { firestoreConnect } from "react-redux-firebase";

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

const CategorySection = (props) => {
  const { campaigns } = props;
  const classes = useStyles();
  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <CssBaseline />
      <Grid container spacing={4}>
        <CampaignList campaigns={campaigns} />
      </Grid>
    </Container>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    campaigns: state.firestore.ordered.campaigns,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((ownProps) => {
    return [
      {
        collection: "campaigns",
        orderBy: ["createdAt", "desc"],
      },
    ];
  })
)(CategorySection);

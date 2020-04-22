import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CardComponent from "../home/CardComponent";
import { connect } from "react-redux";
import { isCompositeComponent } from "react-dom/test-utils";

function Basket(props) {
  console.log(props,"HAMZAH");
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Basket
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="fname"
          />
          {/* <CardComponent /> */}
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="lname"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="lname"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    basket: state.checkout.basket,
  };
};

export default connect(mapStateToProps, null)(Basket);

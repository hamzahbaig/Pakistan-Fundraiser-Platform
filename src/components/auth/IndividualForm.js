import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const checkInputs = fields => {
  if (
    fields.individualFirstName == "" ||
    fields.individualLastName == "" ||
    fields.individualCity == "" ||
    fields.individualAddress == "" ||
    fields.individualContact == "" ||
    fields.individualCNIC == ""
  ) {
    return true;
  }
  return false;
};
export default function IndivualForm(props) {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography component="h1" variant="h5">
          Indivual Form
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                variant="outlined"
                required
                fullWidth
                label="First Name"
                onChange={props.handleChange("individualFirstName")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Last Name"
                autoComplete="lname"
                onChange={props.handleChange("individualLastName")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="City"
                onChange={props.handleChange("individualCity")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Address"
                onChange={props.handleChange("individualAddress")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Contact"
                onChange={props.handleChange("individualContact")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="CNIC"
                onChange={props.handleChange("individualCNIC")}
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={6} sm={6}>
              <Button
                fullWidth
                variant="contained"
                className={classes.submit}
                onClick={props.prevStep}
              >
                Back
              </Button>
            </Grid>
            <Grid item xs={6} sm={6}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                disabled={checkInputs(props.values)}
                onClick ={props.skipStep}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

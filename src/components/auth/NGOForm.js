import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
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
    fields.ngoName == "" ||
    fields.ngoEmail == "" ||
    fields.ngoCity == "" ||
    fields.ngoAddress == "" ||
    fields.ngoContact == ""
  ) {
    return true;
  }
  return false;
};
export default function NGOForm(props) {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography component="h1" variant="h5">
          NGO Details
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            required
            fullWidth
            label="NGO Name"
            margin="normal"
            onChange={props.handleChange("ngoName")}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="NGO Email"
            onChange={props.handleChange("ngoEmail")}
          />
          <TextField
            autoComplete="fname"
            variant="outlined"
            required
            fullWidth
            label="NGO City"
            margin="normal"
            onChange={props.handleChange("ngoCity")}
          />
          <TextField
            variant="outlined"
            required
            fullWidth
            label="NGO Address"
            margin="normal"
            onChange={props.handleChange("ngoAddress")}
          />
          <TextField
            autoComplete="fname"
            variant="outlined"
            required
            fullWidth
            label="NGO Contact"
            margin="normal"
            onChange={props.handleChange("ngoContact")}
          />
          <TextField
            autoComplete="fname"
            variant="outlined"
            fullWidth
            label="NGO Website Link"
            margin="normal"
            onChange={props.handleChange("ngoWebsiteLink")}
          />

          <Grid container spacing={3}>
            <Grid item xs={6} sm={6}>
              <Button
                fullWidth
                variant="contained"
                className={classes.submit}
                onClick={props.prevSkipStep}
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
                onClick = {props.nextStep}
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

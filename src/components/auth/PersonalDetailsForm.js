import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

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

export default function PersonalDetailForm(props) {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography component="h1" variant="h5">
          Personal Details
        </Typography>
        <RadioGroup className="mt-3">
          <FormControlLabel
            checked={props.values.userType == "Individual" ? true : false}
            value="Individual"
            control={<Radio onClick={props.handleChange("userType")} />}
            label="Individual"
          />
          <FormControlLabel
            value="NGO"
            checked={props.values.userType == "NGO" ? true : false}
            control={<Radio onClick={props.handleChange("userType")} />}
            label="NGO"
          />
        </RadioGroup>

        <Grid container spacing={3}>
          <Grid item xs={6} sm={6}>
            <Button
              fullWidth
              variant="contained"
              onClick={props.prevStep}
              className={classes.submit}
            >
              Back
            </Button>
          </Grid>
          <Grid item xs={6} sm={6}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              disabled = {props.values.userType == '' ? true : false}
              className={classes.submit}
              onClick={
                props.values.userType == "Individual"
                  ? props.nextStep
                  : props.skipStep
              }
            >
              Next
            </Button>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

import React from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Zoom from "@material-ui/core/Zoom";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";

const useStyles = makeStyles(theme => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(-1)
  },
  root: {
    marginTop: theme.spacing(5),
    padding: theme.spacing(3, 2)
  },
  gender: {
    marginTop: theme.spacing(2)
  }
}));

const friendOptions = [
  {
    key: "Male",
    text: "Male",
    value: "Male"
  },
  {
    key: "Female",
    text: "Female",
    value: "Female"
  },
  {
    key: "Others",
    text: "Others",
    value: "Others"
  }
];

const MyselfForm = () => {
  const classes = useStyles();
  return (
    <Zoom in={true}>
      <Paper elevation={5} className={classes.root}>
        <form className={classes.form} noValidate>
          <Typography component="h1" variant="h5" className="mb-2">
            Myself Form
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="First Name" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Last Name" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Age" />
            </Grid>
            <Grid item xs={12} className="mt-2">
              <InputLabel>Gender</InputLabel>
              <Select fullWidth>
                <MenuItem value={"Male"}>Male</MenuItem>
                <MenuItem value={"Female"}>Female</MenuItem>
                <MenuItem value={"Other"}>Other</MenuItem>
              </Select>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Zoom>
  );
};

export default MyselfForm;

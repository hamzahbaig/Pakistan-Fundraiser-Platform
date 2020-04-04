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

const MyselfForm = ({ props }) => {
  const classes = useStyles();
  const { values, handleChange, handleBlur, errors, touched } = props;
  return (
    <Zoom in={true}>
      <Paper elevation={5} className={classes.root}>
        <form className={classes.form} noValidate>
          <Typography component="h1" variant="h5" className="mb-2">
            Myself Form
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="First Name"
                name="myselfFirstName"
                onChange={handleChange}
                value={values.myselfFirstName}
                onBlur={handleBlur}
                error={touched.myselfFirstName && errors.myselfFirstName ? true : false}
                helperText={
                  touched.myselfFirstName && errors.myselfFirstName
                    ? errors.myselfFirstName
                    : null
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Last Name"
                name="myselfLastName"
                onChange={handleChange}
                value={values.myselfLastName}
                onBlur={handleBlur}
                error={
                  touched.myselfLastName && errors.myselfLastName ? true : false
                }
                helperText={
                  touched.myselfLastName && errors.myselfLastName
                    ? errors.myselfLastName
                    : null
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="number"
                label="Age"
                name="myselfAge"
                onChange={handleChange}
                value={values.myselfAge}
                onBlur={handleBlur}
                error={touched.myselfAge && errors.myselfAge ? true : false}
                helperText={
                  touched.myselfAge && errors.myselfAge
                    ? errors.myselfAge
                    : null
                }
              />
            </Grid>
            <Grid item xs={12} className="mt-2">
              <InputLabel>Gender</InputLabel>
              <Select
                fullWidth
                name="myselfGender"
                onChange={handleChange}
                value={values.myselfGender}
                onBlur={handleBlur}
                error={
                  touched.myselfGender && errors.myselfGender ? true : false
                }
              >
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

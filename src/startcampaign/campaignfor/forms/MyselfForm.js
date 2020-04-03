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
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(1, "Must have a character")
    .max(255, "Must be shorter than 255 characters")
    .required("Must enter this field"),
  lastName: Yup.string()
    .min(1, "Must have a character")
    .max(255, "Must be shorter than 255 characters")
    .required("Must enter this field"),
  age: Yup.number()
    .min(1, "Age should be greater than 1")
    .max(120, "Age should be less than 120")
    .required("Must enter this field"),
  gender: Yup.string().required("Must enter this field")
});
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



const MyselfForm = () => {
  const classes = useStyles();
  return (
    <Zoom in={true}>
      <Paper elevation={5} className={classes.root}>
        <Formik
          initialValues={{ firstName: "", lastName: "", age: "", gender: "" }}
          validationSchema={validationSchema}
        >
          {({ values, errors, touched, handleChange, handleBlur }) => (
            <form className={classes.form} noValidate>
              {JSON.stringify(values)}
              <Typography component="h1" variant="h5" className="mb-2">
                Myself Form
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="First Name"
                    name="firstName"
                    onChange={handleChange}
                    value={values.firstName}
                    onBlur={handleBlur}
                    error={touched.firstName && errors.firstName}
                    helperText={
                      touched.firstName && errors.firstName
                        ? errors.firstName
                        : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    name="lastName"
                    onChange={handleChange}
                    value={values.lastName}
                    onBlur={handleBlur}
                    error={touched.lastName && errors.lastName}
                    helperText={
                      touched.lastName && errors.lastName
                        ? errors.lastName
                        : null
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    type="number"
                    label="Age"
                    name="age"
                    onChange={handleChange}
                    value={values.age}
                    onBlur={handleBlur}
                    error={touched.age && errors.age}
                    helperText={touched.age && errors.age ? errors.age : null}
                  />
                </Grid>
                <Grid item xs={12} className="mt-2">
                  <InputLabel>Gender</InputLabel>
                  <Select
                    fullWidth
                    name="gender"
                    onChange={handleChange}
                    value={values.gender}
                    onBlur={handleBlur}
                    error={touched.gender && errors.gender}
                    helperText={
                      touched.gender && errors.gender ? errors.gender : null
                    }
                  >
                    <MenuItem value={"Male"}>Male</MenuItem>
                    <MenuItem value={"Female"}>Female</MenuItem>
                    <MenuItem value={"Other"}>Other</MenuItem>
                  </Select>
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
      </Paper>
    </Zoom>
  );
};

export default MyselfForm;

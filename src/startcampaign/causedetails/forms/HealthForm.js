import React from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Zoom from "@material-ui/core/Zoom";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MaskedInput from "react-text-mask";
import PropTypes from "prop-types";
import Switch from "@material-ui/core/Switch";
import Collapse from "@material-ui/core/Collapse";
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  hospitalName: Yup.string()
    .min(1, "Must have a character")
    .max(255, "Must be shorter than 255 characters")
    .required("Must enter this field"),
  hospitalEmail: Yup.string()
    .email()
    .max(255, "Must be shorter than 255 characters")
    .required("Must enter this field"),
  hospitalAddress: Yup.string()
    .min(5, "Musut be greater than 5 characters")
    .max(255, "Must be less than 255 characters")
    .required("Must enter this field"),
  hospitalContact: Yup.string().required("Must enter this field"),
  patientId: Yup.string()
    .min(1, "ID should be greater than 1")
    .max(120, "ID should be less than 120")
    .required("Must enter this field")
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

function contact(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[
        "(",
        "+",
        9,
        2,
        ")",
        " ",
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/
      ]}
      placeholderChar={"\u2000"}
      showMask
    />
  );
}

contact.propTypes = {
  inputRef: PropTypes.func.isRequired
};
const HealthForm = () => {
  const classes = useStyles();

  return (
    <Zoom in={true}>
      <Paper elevation={5} className={classes.root}>
        <Formik
          initialValues={{
            hospital: false,
            hospitalName: "",
            hospitalEmail: "",
            hospitalAddress: "",
            hospitalContact: "",
            patientId: ""
          }}
          validationSchema={validationSchema}
        >
          {({ values, errors, touched, handleChange, handleBlur }) => (
            <form className={classes.form} noValidate>
              {JSON.stringify(values)}
              <Typography component="h1" variant="h5" className="mb-2">
                Health Form
              </Typography>
              <Grid container>
                <Grid item xs className="mt-2">
                  Paitient addmited in Hospital
                </Grid>
                <Grid item>
                  <Switch
                    checked={values.hospital}
                    onChange={handleChange}
                    name="hospital"
                  />
                </Grid>
              </Grid>
              <Collapse in={values.hospital}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Hospital Name"
                      name="hospitalName"
                      onChange={handleChange}
                      value={values.hospitalName}
                      onBlur={handleBlur}
                      error={touched.hospitalName && errors.hospitalName}
                      helperText={
                        touched.hospitalName && errors.hospitalName
                          ? errors.hospitalName
                          : null
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Hospital Email"
                      name="hospitalEmail"
                      onChange={handleChange}
                      value={values.hospitalEmail}
                      onBlur={handleBlur}
                      error={touched.hospitalEmail && errors.hospitalEmail}
                      helperText={
                        touched.hospitalEmail && errors.hospitalEmail
                          ? errors.hospitalEmail
                          : null
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Hospital Address"
                      name="hospitalAddress"
                      onChange={handleChange}
                      value={values.hospitalAddress}
                      onBlur={handleBlur}
                      error={touched.hospitalAddress && errors.hospitalAddress}
                      helperText={
                        touched.hospitalAddress && errors.hospitalAddress
                          ? errors.hospitalAddress
                          : null
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <InputLabel>Hospital Contact</InputLabel>
                    <Input
                      fullWidth
                      inputComponent={contact}
                      name="hospitalContact"
                      onChange={handleChange}
                      value={values.hospitalContact}
                      onBlur={handleBlur}
                      error={touched.hospitalContact && errors.hospitalContact}
                      helperText={
                        touched.hospitalContact && errors.hospitalContact
                          ? errors.hospitalContact
                          : null
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Patient ID"
                      name="patientId"
                      onChange={handleChange}
                      value={values.patientId}
                      onBlur={handleBlur}
                      error={touched.patientId && errors.patientId}
                      helperText={
                        touched.patientId && errors.patientId
                          ? errors.patientId
                          : null
                      }
                    />
                  </Grid>
                </Grid>
              </Collapse>
            </form>
          )}
        </Formik>
      </Paper>
    </Zoom>
  );
};

export default HealthForm;

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
        "+",
        9,
        2,
        "-",
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
const HealthForm = ({ props }) => {
  const classes = useStyles();
  const { values, errors, touched, handleChange, handleBlur } = props;
  return (
    <Zoom in={true}>
      <Paper elevation={5} className={classes.root}>
        <form className={classes.form} noValidate>
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
                  error={touched.hospitalName && errors.hospitalName  ? true
                    : false}
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
                  error={touched.hospitalEmail && errors.hospitalEmail  ? true
                    : false}
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
                  error={touched.hospitalAddress && errors.hospitalAddress  ? true
                    : false}
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
                  error={touched.hospitalContact && errors.hospitalContact  ? true
                    : false}
                 
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
                  error={touched.patientId && errors.patientId ? true : false}
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
      </Paper>
    </Zoom>
  );
};

export default HealthForm;

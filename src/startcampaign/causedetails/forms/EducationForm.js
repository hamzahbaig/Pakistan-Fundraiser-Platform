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
const EducationForm = ({ props }) => {
  const classes = useStyles();
  const { values, errors, touched, handleChange, handleBlur } = props;
  return (
    <Zoom in={true}>
      <Paper elevation={5} className={classes.root}>
        <form className={classes.form} noValidate>
          <Typography component="h1" variant="h5" className="mb-2">
            Education Form
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="School Name"
                name="schoolName"
                onChange={handleChange}
                value={values.schoolName}
                onBlur={handleBlur}
                error={touched.schoolName && errors.schoolName}
                helperText={
                  touched.schoolName && errors.schoolName
                    ? errors.schoolName
                    : null
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="School Email"
                name="schoolEmail"
                onChange={handleChange}
                value={values.schoolEmail}
                onBlur={handleBlur}
                error={touched.schoolEmail && errors.schoolEmail}
                helperText={
                  touched.schoolEmail && errors.schoolEmail
                    ? errors.schoolEmail
                    : null
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="School Address"
                name="schoolAddress"
                onChange={handleChange}
                value={values.schoolAddress}
                onBlur={handleBlur}
                error={touched.schoolAddress && errors.schoolAddress}
                helperText={
                  touched.schoolAddress && errors.schoolAddress
                    ? errors.schoolAddress
                    : null
                }
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel>School Contact</InputLabel>
              <Input
                fullWidth
                inputComponent={contact}
                name="schoolContact"
                onChange={handleChange}
                value={values.schoolContact}
                onBlur={handleBlur}
                error={touched.schoolContact && errors.schoolContact}
                helperText={
                  touched.schoolContact && errors.schoolContact
                    ? errors.schoolContact
                    : null
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Student ID"
                name="schoolId"
                onChange={handleChange}
                value={values.schoolId}
                onBlur={handleBlur}
                error={touched.schoolId && errors.schoolId}
                helperText={
                  touched.schoolId && errors.schoolId ? errors.schoolId : null
                }
              />
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Zoom>
  );
};

export default EducationForm;

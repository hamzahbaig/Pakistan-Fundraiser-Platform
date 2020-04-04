import React from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MaskedInput from "react-text-mask";
import PropTypes from "prop-types";
import Zoom from "@material-ui/core/Zoom";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { Formik } from "formik";
import * as Yup from "yup";

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
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
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

function cnic(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[
        /\d/,
        /\d/,
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
        /\d/,
        "-",
        /\d/
      ]}
      placeholderChar={"\u2000"}
      showMask
    />
  );
}

cnic.propTypes = {
  inputRef: PropTypes.func.isRequired
};
const BeneficiaryForm = ({ props }) => {
  const classes = useStyles();
  const { values, errors, touched, handleChange, handleBlur } = props;
  return (
    <Zoom in={true}>
      <Paper elevation={5} className={classes.root}>
        <form className={classes.form} noValidate>
          <Typography component="h1" variant="h5" className="mb-2">
            Beneficiary Form
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="First Name"
                name="beneficiaryFirstName"
                onChange={handleChange}
                value={values.beneficiaryFirstName}
                onBlur={handleBlur}
                error={
                  touched.beneficiaryFirstName && errors.beneficiaryFirstName
                    ? true
                    : false
                }
                helperText={
                  touched.beneficiaryFirstName && errors.beneficiaryFirstName
                    ? errors.beneficiaryFirstName
                    : null
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Last Name"
                name="beneficiaryLastName"
                onChange={handleChange}
                value={values.beneficiaryLastName}
                onBlur={handleBlur}
                error={
                  touched.beneficiaryLastName && errors.beneficiaryLastName
                    ? true
                    : false
                }
                helperText={
                  touched.beneficiaryLastName && errors.beneficiaryLastName
                    ? errors.beneficiaryLastName
                    : null
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="number"
                fullWidth
                label="Age"
                name="beneficiaryAge"
                onChange={handleChange}
                value={values.beneficiaryAge}
                onBlur={handleBlur}
                error={
                  touched.beneficiaryAge && errors.beneficiaryAge ? true : false
                }
                helperText={
                  touched.beneficiaryAge && errors.beneficiaryAge
                    ? errors.beneficiaryAge
                    : null
                }
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Address"
                name="beneficiaryAddress"
                onChange={handleChange}
                value={values.beneficiaryAddress}
                onBlur={handleBlur}
                error={
                  touched.beneficiaryAddress && errors.beneficiaryAddress
                    ? true
                    : false
                }
                helperText={
                  touched.beneficiaryAddress && errors.beneficiaryAddress
                    ? errors.beneficiaryAddress
                    : null
                }
              />
            </Grid>
            <Grid item xs={12} className="mt-2">
              <InputLabel>Gender</InputLabel>
              <Select
                fullWidth
                name="beneficiaryGender"
                onChange={handleChange}
                value={values.beneficiaryGender}
                onBlur={handleBlur}
                error={
                  touched.beneficiaryGender && errors.beneficiaryGender
                    ? true
                    : false
                }
              >
                <MenuItem value={"Male"}>Male</MenuItem>
                <MenuItem value={"Female"}>Female</MenuItem>
                <MenuItem value={"Other"}>Other</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12}>
              <InputLabel>Contact</InputLabel>
              <Input
                fullWidth
                name="beneficiaryContact"
                inputComponent={contact}
                onChange={handleChange}
                value={values.beneficiaryContact}
                onBlur={handleBlur}
                error={
                  touched.beneficiaryContact && errors.beneficiaryContact
                    ? true
                    : false
                }
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel>CNIC</InputLabel>
              <Input
                fullWidth
                name="beneficiaryCnic"
                inputComponent={cnic}
                onChange={handleChange}
                value={values.beneficiaryCnic}
                onBlur={handleBlur}
                error={
                  touched.beneficiaryCnic && errors.beneficiaryCnic
                    ? true
                    : false
                }
              />
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Zoom>
  );
};

export default BeneficiaryForm;

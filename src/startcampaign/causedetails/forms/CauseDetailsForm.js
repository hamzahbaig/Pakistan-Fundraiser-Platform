import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import MaskedInput from "react-text-mask";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputAdornment from "@material-ui/core/InputAdornment";
import createNumberMask from "text-mask-addons/dist/createNumberMask";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { Formik } from "formik";
import * as Yup from "yup";
import TextField from "@material-ui/core/TextField";

const defaultMaskOptions = {
  prefix: "",
  suffix: "",
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: ",",
  allowDecimal: false,
  decimalSymbol: ".",
  integerLimit: 7, // limit length of integer numbers
  allowNegative: false,
  allowLeadingZeroes: false
};
const CurrencyInput = ({ maskOptions, ...inputProps }) => {
  const currencyMask = createNumberMask({
    ...defaultMaskOptions,
    ...maskOptions
  });

  return <MaskedInput mask={currencyMask} {...inputProps} />;
};

const useStyles = makeStyles(theme => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(-1)
  },
  root: {
    marginTop: theme.spacing(5),
    padding: theme.spacing(3, 2)
  },
  date: {
    marginTop: theme.spacing(-1)
  }
}));

const CauseDetailsForm = ({ props }) => {
  const classes = useStyles();
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    setFieldValue
  } = props;
  return (
    <Paper elevation={5} className={classes.root}>
      <form className={classes.form} noValidate>
        <Typography component="h1" variant="h5" className="mb-3">
          Cause Details Form
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <InputLabel>Campaign Type</InputLabel>
            <Select
              fullWidth
              name="campaignType"
              onChange={handleChange}
              value={values.campaignType}
              onBlur={handleBlur}
              error={touched.campaignType && errors.campaignType}
              helperText={
                touched.campaignType && errors.campaignType
                  ? errors.campaignType
                  : null
              }
            >
              <MenuItem value={"Fixed"}>Fixed</MenuItem>
              <MenuItem value={"Flexible"}>Flexible</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Amount"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Rs</InputAdornment>
                ),
                inputComponent: CurrencyInput
              }}
              name="amount"
              onChange={handleChange}
              value={values.amount}
              onBlur={handleBlur}
              error={touched.amount && errors.amount}
              helperText={
                touched.amount && errors.amount ? errors.amount : null
              }
            />
          </Grid>
          <Grid item xs={12} className={classes.date}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                margin="normal"
                format="MM/dd/yyyy"
                fullWidth
                label="Campaign Expiry Date"
                name="expiry"
                onChange={val => setFieldValue("expiry", val)}
                value={values.expiry}
                onBlur={handleBlur}
                error={touched.expiry && errors.expiry}
                helperText={
                  touched.expiry && errors.expiry ? errors.expiry : null
                }
              />
            </MuiPickersUtilsProvider>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default CauseDetailsForm;

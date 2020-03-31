import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MaskedInput from "react-text-mask";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";
import createNumberMask from "text-mask-addons/dist/createNumberMask";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const defaultMaskOptions = {
  prefix: "",
  suffix: "",
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: ",",
  allowDecimal: true,
  decimalSymbol: ".",
  decimalLimit: 2, // how many digits allowed after the decimal
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
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
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

const CauseDetailsForm = () => {
  const classes = useStyles();
  return (
    <Paper elevation={5} className={classes.root}>
      <form className={classes.form} noValidate>
        <Typography component="h1" variant="h5" className="mb-3">
          Cause Details Form
        </Typography>
        <FormControl className={classes.form} >
          <Grid item xs={12}>
            <InputLabel>Campaign Type</InputLabel>
            <Select fullWidth>
              <MenuItem value={"Fixed"}>Fixed</MenuItem>
              <MenuItem value={"Flexible"}>Flexible</MenuItem>
            </Select>
          </Grid>
        </FormControl>
        <FormControl className="mt-4" fullWidth>
          <Grid item xs={12}>
            <InputLabel>Amount</InputLabel>
            <Input
              fullWidth
              id="standard-adornment-amount"
              startAdornment={
                <InputAdornment position="start">Rs</InputAdornment>
              }
              inputComponent={CurrencyInput}
            />
          </Grid>
        </FormControl>
        <FormControl className="mt-3" fullWidth>
          <Grid item xs={12}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                margin="normal"
                format="MM/dd/yyyy"
                fullWidth
                label="Campaign Expiry Date"
              />
            </MuiPickersUtilsProvider>
          </Grid>
        </FormControl>
      </form>
    </Paper>
  );
};

export default CauseDetailsForm;

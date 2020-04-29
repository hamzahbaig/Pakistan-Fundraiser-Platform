import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import CheckoutCard from "./checkoutCard";
import { LinearProgress } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import MaskedInput from "react-text-mask";
import createNumberMask from "text-mask-addons/dist/createNumberMask";

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const defaultMaskOptions = {
  prefix: "",
  suffix: "",
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: ",",
  allowDecimal: false,
  decimalSymbol: ".",
  integerLimit: 7, // limit length of integer numbers
  allowNegative: false,
  allowLeadingZeroes: false,
};
const CurrencyInput = ({ maskOptions, ...inputProps }) => {
  const currencyMask = createNumberMask({
    ...defaultMaskOptions,
    ...maskOptions,
  });

  return <MaskedInput mask={currencyMask} {...inputProps} />;
};

function Basket(props) {
  const { values, errors, touched, handleBlur, setFieldValue } = props.props;
  let { amount, amountRaised } = props.props.basket;
  let currentAmountRaised =
    values.currentAmountRaised == ""
      ? 0
      : parseInt(values.currentAmountRaised.replace(/,/g, ""));
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Basket
      </Typography>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} sm={5}>
          <CheckoutCard
            campaign={props.props.basket}
            currentAmountRaised={currentAmountRaised}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <LinearProgress
            variant="determinate"
            value={((amountRaised + currentAmountRaised) / amount) * 100}
            style={{ height: 12, borderRadius: 2 }}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            label="Amount Raised"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">Rs</InputAdornment>
              ),
              inputComponent: CurrencyInput,
            }}
            name="currentAmountRaised"
            onChange={(event) => {
              const val = event.target.value;
              if (val == "") {
                setFieldValue("currentAmountRaised", val);
                return;
              }
              const check = parseInt(val.replace(/,/g, ""));
              if (check + amountRaised <= amount) {
                setFieldValue("currentAmountRaised", val);
              } else {
                setFieldValue(
                  "currentAmountRaised",
                  numberWithCommas(amount - amountRaised)
                );
              }
            }}
            value={values.currentAmountRaised}
            onBlur={handleBlur}
            error={
              touched.currentAmountRaised && errors.currentAmountRaised
                ? true
                : false
            }
            helperText={
              touched.currentAmountRaised && errors.currentAmountRaised
                ? errors.currentAmountRaised
                : null
            }
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Basket;

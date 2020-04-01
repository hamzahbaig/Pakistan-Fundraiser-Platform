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

  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    console.log(checked);
    setChecked(prev => !prev);
  };
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
              <Switch checked={checked} onChange={handleChange} />
            </Grid>
          </Grid>
          <Collapse in={checked}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField fullWidth label="Hospital Name" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Hospital Email" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Hospital Address" />
              </Grid>
              <Grid item xs={12}>
                <InputLabel>Hospital Contact</InputLabel>
                <Input fullWidth inputComponent={contact} />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Patient ID" />
              </Grid>
            </Grid>
          </Collapse>
        </form>
      </Paper>
    </Zoom>
  );
};

export default HealthForm;

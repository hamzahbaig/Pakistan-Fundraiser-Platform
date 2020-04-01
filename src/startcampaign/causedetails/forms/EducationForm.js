import React from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Dropdown } from "semantic-ui-react";
import Typography from "@material-ui/core/Typography";
import Zoom from "@material-ui/core/Zoom";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MaskedInput from "react-text-mask";
import PropTypes from "prop-types";
import Collapse from "@material-ui/core/Collapse";

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
const EducationForm = () => {
  const classes = useStyles();
  return (
    <Zoom in={true} >
      <Paper elevation={5} className={classes.root}>
        <form className={classes.form} noValidate>
          <Typography component="h1" variant="h5" className="mb-2">
            Education Form
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField fullWidth label="School Name" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="School Email" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="School Address" />
            </Grid>
            <Grid item xs={12}>
              <InputLabel>School Contact</InputLabel>
              <Input fullWidth inputComponent={contact} />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Student ID" />
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Zoom>
  );
};

export default EducationForm;

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

const ProjectForm = ({ props }) => {
  const classes = useStyles();
  const { values, errors, touched, handleChange, handleBlur } = props;
  return (
    <Zoom in={true}>
      <Paper elevation={5} className={classes.root}>
        <form className={classes.form} noValidate>
          <Typography component="h1" variant="h5" className="mb-2">
            Project Form
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Project Organiser Name"
                name="projectOrganiserName"
                onChange={handleChange}
                value={values.projectOrganiserName}
                onBlur={handleBlur}
                error={
                  touched.projectOrganiserName && errors.projectOrganiserName
                    ? true
                    : false
                }
                helperText={
                  touched.projectOrganiserName && errors.projectOrganiserName
                    ? errors.projectOrganiserName
                    : null
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Project Organiser Address"
                name="projectOrganiserAddress"
                onChange={handleChange}
                value={values.projectOrganiserAddress}
                onBlur={handleBlur}
                error={
                  touched.projectOrganiserAddress &&
                  errors.projectOrganiserAddress
                    ? true
                    : false
                }
                helperText={
                  touched.projectOrganiserAddress &&
                  errors.projectOrganiserAddress
                    ? errors.projectOrganiserAddress
                    : null
                }
              />
            </Grid>
            <Grid item xs={12} className="mt-2">
              <InputLabel>Gender</InputLabel>
              <Select
                fullWidth
                name="projectOrganiserGender"
                onChange={handleChange}
                value={values.projectOrganiserGender}
                onBlur={handleBlur}
                error={
                  touched.projectOrganiserGender &&
                  errors.projectOrganiserGender
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
              <InputLabel>Project Organiser Contact</InputLabel>
              <Input
                fullWidth
                inputComponent={contact}
                name="projectOrganiserContact"
                onChange={handleChange}
                value={values.projectOrganiserContact}
                onBlur={handleBlur}
                error={
                  touched.projectOrganiserContact &&
                  errors.projectOrganiserContact
                    ? true
                    : false
                }
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel>Project Organiser CNIC</InputLabel>
              <Input
                fullWidth
                inputComponent={cnic}
                name="projectOrganiserCnic"
                onChange={handleChange}
                value={values.projectOrganiserCnic}
                onBlur={handleBlur}
                error={
                  touched.projectOrganiserCnic && errors.projectOrganiserCnic
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

export default ProjectForm;

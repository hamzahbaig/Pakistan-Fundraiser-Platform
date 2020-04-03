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

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(1, "Must have a character")
    .max(255, "Must be shorter than 255 characters")
    .required("Must enter this field"),

  gender: Yup.string().required("Must enter this field"),
  address: Yup.string()
    .min(5, "Musut be greater than 5 characters")
    .max(255, "Must be less than 255 characters")
    .required("Must enter this field"),
  cnic: Yup.string().required("Must enter this field"),
  contact: Yup.string().required("Must enter this field")
});

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
const genderOptions = [
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

const ProjectForm = () => {
  const classes = useStyles();
  return (
    <Zoom in={true}>
      <Paper elevation={5} className={classes.root}>
        <Formik
          initialValues={{
            name: "",
            gender: "",
            address: "",
            contact: "",
            cnic: ""
          }}
          validationSchema={validationSchema}
        >
          {({ values, errors, touched, handleChange, handleBlur }) => (
            <form className={classes.form} noValidate>
              {JSON.stringify(values)}

              <Typography component="h1" variant="h5" className="mb-2">
                Project Form
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Project Organiser Name"
                    name="name"
                    onChange={handleChange}
                    value={values.name}
                    onBlur={handleBlur}
                    error={touched.name && errors.name}
                    helperText={
                      touched.name && errors.name ? errors.name : null
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Project Organiser Address"
                    name="address"
                    onChange={handleChange}
                    value={values.address}
                    onBlur={handleBlur}
                    error={touched.address && errors.address}
                    helperText={
                      touched.address && errors.address ? errors.address : null
                    }
                  />
                </Grid>
                <Grid item xs={12} className="mt-2">
                  <InputLabel>Gender</InputLabel>
                  <Select
                    fullWidth
                    name="gender"
                    onChange={handleChange}
                    value={values.gender}
                    onBlur={handleBlur}
                    error={touched.gender && errors.gender}
                    helperText={
                      touched.gender && errors.gender ? errors.gender : null
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
                    name="contact"
                    onChange={handleChange}
                    value={values.contact}
                    onBlur={handleBlur}
                    error={touched.contact && errors.contact}
                    
                    helperText={
                      touched.contact && errors.contact ? errors.contact : null
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <InputLabel>Project Organiser CNIC</InputLabel>
                  <Input
                    fullWidth
                    inputComponent={cnic}
                    name="cnic"
                    onChange={handleChange}
                    value={values.cnic}
                    onBlur={handleBlur}
                    error={touched.cnic && errors.cnic}
                    helperText={
                      touched.cnic && errors.cnic ? errors.cnic : null
                    }
                  />
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
      </Paper>
    </Zoom>
  );
};

export default ProjectForm;

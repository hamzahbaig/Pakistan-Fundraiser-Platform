import React from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Zoom from "@material-ui/core/Zoom";
import { UploaderComponent } from "@syncfusion/ej2-react-inputs";
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  campaignTitle: Yup.string()
    .min(1, "Must have a character")
    .max(255, "Must be shorter than 255 characters")
    .required("Must enter this field")
});

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
  },
  story: {
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column"
  }
}));

const ElaborateCauseForm = () => {
  const classes = useStyles();
  return (
    <Zoom in={true}>
      <Paper elevation={5} className={classes.root}>
        <Formik
          initialValues={{ campaignTitle: "" }}
          validationSchema={validationSchema}
        >
          {({ values, errors, touched, handleChange, handleBlur }) => (
            <form className={classes.form} noValidate>
              <Typography component="h1" variant="h5" className="mb-2">
                Elaborate Cause Details Form
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Campaign Title"
                    name="campaignTitle"
                    onChange={handleChange}
                    value={values.campaignTitle}
                    onBlur={handleBlur}
                    error={touched.campaignTitle && errors.campaignTitle}
                    helperText={
                      touched.campaignTitle && errors.campaignTitle
                        ? errors.campaignTitle
                        : null
                    }
                  />
                </Grid>
              </Grid>
              {/* Upload Component */}
              <Grid item className={classes.story}>
                <Typography component="h1" variant="h5">
                  Attach Supporting Documents
                </Typography>
              </Grid>
              <Grid item className="mt-4">
                <UploaderComponent />
              </Grid>
              {/* End Upload Component */}
            </form>
          )}
        </Formik>
      </Paper>
    </Zoom>
  );
};

export default ElaborateCauseForm;

import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ElaborateCauseForm from "./forms/ElaborateCauseForm";
import { ProgressBar } from "react-bootstrap";
import { withFormik } from "formik";
import * as Yup from "yup";
import { saveElaborateCause } from "../../store/actions/campaignActions";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  story: {
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(-1),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const ElaborateCause = (props) => {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography component="h1" variant="h5">
          Elaborate Cause Details
        </Typography>
      </div>

      <ElaborateCauseForm props={props} />

      {/* Editior Component */}
      <Grid item className={classes.story}>
        <Typography component="h1" variant="h5">
          Write your Story
        </Typography>
      </Grid>
      <Grid item className="mt-4">
        <CKEditor
          editor={ClassicEditor}
          onChange={(e, editor) =>
            props.setFieldValue("story", editor.getData())
          }
          data={props.values.story}
          config={{
            toolbar: [
              "heading",
              "|",
              "bold",
              "italic",
              "link",
              "bulletedList",
              "numberedList",
              "|",
              "indent",
              "outdent",
              "|",
              "blockQuote",
              "insertTable",
              "undo",
              "redo",
            ],
          }}
          onInit={(editor) => {
            console.log(editor);
          }}
        />
      </Grid>
      {/* End Editor Component */}
      <Grid item className={classes.submit}>
        <ProgressBar
          now={props.step}
          label={`${props.step * 20}%`}
          style={{ height: 25 }}
          min={0}
          max={4}
        />
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={6}>
          <Button
            fullWidth
            variant="contained"
            className={classes.submit}
            onClick={props.prevStep}
          >
            Back
          </Button>
        </Grid>
        <Grid item xs={6} sm={6}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            className={classes.submit}
            onClick={props.handleSubmit}
            disabled={props.isSubmitting}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

const ElaborateCauseFormik = withFormik({
  mapPropsToValues(props) {
    return {
      ...props.campaign,
    };
  },
  handleSubmit(values, { props }) {
    setTimeout(() => {
      console.log(values, "SUBMITEED");
      props.saveElaborateCause(values);
      props.history.push("/")
    }, 500);
  },
  validationSchema: Yup.object().shape({
    campaignTitle: Yup.string()
      .min(1, "Must have a character")
      .max(255, "Must be shorter than 255 characters")
      .required("Must enter this field"),
  }),
})(ElaborateCause);

const mapStateToProps = (state) => {
  return {
    campaign: state.campaign,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveElaborateCause: (values) => dispatch(saveElaborateCause(values)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ElaborateCauseFormik);

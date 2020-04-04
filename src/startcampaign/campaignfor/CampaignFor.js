import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Dropdown } from "semantic-ui-react";
import MyselfForm from "./forms/MyselfForm";
import ProjectForm from "./forms/ProjectForm";
import BeneficiaryForm from "./forms/BeneficiaryForm";
import { ProgressBar } from "react-bootstrap";
import { withFormik, Form } from "formik";
import * as Yup from "yup";
const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const campaignOptions = [
  {
    key: "Myself",
    text: "Myself",
    value: "Myself"
  },
  {
    key: "Project",
    text: "Project",
    value: "Project"
  },
  {
    key: "Beneficiary",
    text: "Beneficiary",
    value: "Beneficiary"
  }
];

const CampaignFor = props => {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      {JSON.stringify(props.values)}

      <div className={classes.paper}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography component="h1" variant="h5">
          Campaign For
        </Typography>
        <span className="mt-3">
          This campaign will benefit{" "}
          <Dropdown
            inline
            options={campaignOptions}
            onChange={(e, { value }) => {
              props.setCampaignFor(value);
            }}
            value={props.campaignFor}
          />
        </span>
      </div>
      {props.campaignFor == "Myself" ? <MyselfForm props={props} /> : null}
      {props.campaignFor == "Project" ? <ProjectForm props={props} /> : null}
      {props.campaignFor == "Beneficiary" ? (
        <BeneficiaryForm props={props} />
      ) : null}
      <Grid item className={classes.submit}>
        <ProgressBar
          now={props.step}
          label={`${props.step * 20}%`}
          style={{ height: 25 }}
          min={0}
          max={4}
        />
      </Grid>
      <Grid container spacing={3} style={{ flexDirection: "row-reverse" }}>
        <Grid item xs={6} sm={6}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className={classes.submit}
            onClick={props.handleSubmit}
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

const phoneRegExp = /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/;

const cnicRegExp = /^[0-9+]{5}-[0-9+]{7}-[0-9]{1}$/;

const CampaignForFormik = withFormik({
  mapPropsToValues() {
    return {
      myselfFirstName: "",
      myselfLastName: "",
      myselfAge: "",
      myselfGender: "",

      projectOrganiserName: "",
      projectOrganiserAddress: "",
      projectOrganiserGender: "",
      projectOrganiserContact: "+92-   -       ",
      projectOrganiserCnic: "     -       - ",

      beneficiaryFirstName: "",
      beneficiaryLastName: "",
      beneficiaryAge: "",
      beneficiaryGender: "",
      beneficiaryCnic: "     -       - ",
      beneficiaryAddress: "",
      beneficiaryContact: "+92-   -       "
    };
  },
  handleSubmit(values, props) {
    setTimeout(() => {
      console.log(values, "SUBMITEED");
      props.props.nextStep();
    }, 500);
  },
  validationSchema(props) {
    if (props.campaignFor == "Myself") {
      return Yup.object().shape({
        myselfFirstName: Yup.string()
          .min(1, "Must have a character")
          .max(255, "Must be shorter than 255 characters")
          .required("Must enter this field"),
        myselfLastName: Yup.string()
          .min(1, "Must have a character")
          .max(255, "Must be shorter than 255 characters")
          .required("Must enter this field"),
        myselfAge: Yup.number()
          .positive()
          .min(1, "Age should be greater than 1")
          .max(120, "Age should be less than 120")
          .required("Must enter this field"),
        myselfGender: Yup.string().required("Must enter this field")
      });
    } else if (props.campaignFor == "Project") {
      return Yup.object().shape({
        projectOrganiserName: Yup.string()
          .min(1, "Must have a character")
          .max(255, "Must be shorter than 255 characters")
          .required("Must enter this field"),
        projectOrganiserAddress: Yup.string()
          .min(5, "Musut be greater than 5 characters")
          .max(255, "Must be less than 255 characters")
          .required("Must enter this field"),
        projectOrganiserCnic: Yup.string().matches(
          cnicRegExp,
          "CNIC is not valid"
        ),
        projectOrganiserContact: Yup.string().matches(
          phoneRegExp,
          "Phone number is not valid"
        ),
        projectOrganiserGender: Yup.string().required("Must enter this field")
      });
    } else if (props.campaignFor == "Beneficiary") {
      return Yup.object().shape({
        beneficiaryFirstName: Yup.string()
          .min(1, "Must have a character")
          .max(255, "Must be shorter than 255 characters")
          .required("Must enter this field"),
        beneficiaryLastName: Yup.string()
          .min(1, "Must have a character")
          .max(255, "Must be shorter than 255 characters")
          .required("Must enter this field"),
        beneficiaryAge: Yup.number()
          .positive()
          .min(1, "Age should be greater than 1")
          .max(120, "Age should be less than 120")
          .required("Must enter this field"),
        beneficiaryGender: Yup.string().required("Must enter this field"),
        beneficiaryAddress: Yup.string()
          .min(5, "Musut be greater than 5 characters")
          .max(255, "Must be less than 255 characters")
          .required("Must enter this field"),
        beneficiaryCnic: Yup.string().matches(cnicRegExp, "CNIC is not valid"),
        beneficiaryContact: Yup.string().matches(
          phoneRegExp,
          "Phone number is not valid"
        )
      });
    }
  }
})(CampaignFor);

export default CampaignForFormik;

import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Dropdown } from "semantic-ui-react";
import Paper from "@material-ui/core/Paper";
import MyselfForm from "./MyselfForm";
import { Progress } from "semantic-ui-react";
import { ProgressBar } from "react-bootstrap";
import BeneficiaryForm from "./BeneficiaryForm";
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
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
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
const CampaignFor = () => {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
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
            defaultValue={campaignOptions[0].value}
          />
        </span>
      </div>
      <BeneficiaryForm />
      <Grid item className={classes.submit} sm={12}>
        <ProgressBar now={60} style={{ height: 20 }} label={`${60}%`} />
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={6}>
          <Button fullWidth variant="contained" className={classes.submit}>
            Back
          </Button>
        </Grid>
        <Grid item xs={6} sm={6}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            className={classes.submit}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CampaignFor;

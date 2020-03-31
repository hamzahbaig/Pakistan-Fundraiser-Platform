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
  const [value, setValue] = useState("Myself");
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
            onChange={(e, { value }) => {
              setValue(value);
            }}
            value={value}
          />
        </span>
      </div>
      {value == "Myself" ? (
          <MyselfForm />
      ) : null}
      {value == "Project" ? (
          <ProjectForm />
      ) : null}
      {value == "Beneficiary" ? (
          <BeneficiaryForm />
      ) : null}

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

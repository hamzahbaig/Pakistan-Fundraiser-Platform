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
      {value == "Myself" ? <MyselfForm /> : null}
      {value == "Project" ? <ProjectForm /> : null}
      {value == "Beneficiary" ? <BeneficiaryForm /> : null}
      <Grid item className={classes.submit}>
        <ProgressBar
          now={props.step}
          label={`${props.step*20}%`}
          style={{ height: 25 }}
          min={0}
          max={4}
        />
      </Grid>
      <Grid container spacing={3} style={{ flexDirection: "row-reverse" }}>
        <Grid item xs={6} sm={6}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            className={classes.submit}
            onClick={props.nextStep}
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CampaignFor;

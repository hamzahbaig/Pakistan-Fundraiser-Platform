import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

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

export default function Success(props) {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="sm">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography className="mt-2" component="h1" variant="h4">
          ThankYou For Registering!
        </Typography>
        <Typography className="mt-2" component="h1" variant="h5">
          Giving is the greatest act of grace.
        </Typography>
        <Container maxWidth="xs" className="mt-5">
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => props.history.push("/")}
          >
            Finish
          </Button>
        </Container>
      </div>
    </Container>
  );
}

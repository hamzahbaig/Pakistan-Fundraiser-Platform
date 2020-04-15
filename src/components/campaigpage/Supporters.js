import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { LinearProgress, Divider } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  supporterComponent: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
    marginTop: theme.spacing(2),
  },
}));
const supporters = ["Hamzah Baig", "Minhal Aftab", "Suleman Shahid"];
const Supporters = (props) => {
  const classes = useStyles();
  return supporters.map((supporter) => (
    <Paper elevation={0} className={classes.supporterComponent}>
      <div>
        <Typography variant="subtitle1" display="inline">
          {supporter}
        </Typography>
        <Typography variant="subtitle1" display="inline">
          {" donated "}
        </Typography>
        <Typography
          variant="subtitle1"
          display="inline"
          style={{ fontWeight: "bold" }}
        >
          {"Rs. 101"}
        </Typography>
      </div>
    </Paper>
  ));
};

export default Supporters;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";

import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const MenuAppBar = props => {
  const classes = useStyles();
  const [authStatus, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const { auth, profile } = props;
  const handleChange = event => {
    setAuth(event.target.checked);
  };

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const links = auth.uid ? (
    <SignedInLinks
      handleClose={handleClose}
      handleMenu={handleMenu}
      anchorEl={anchorEl}
      open={open}
    />
  ) : (
    <SignedOutLinks
      handleClose={handleClose}
      handleMenu={handleMenu}
      anchorEl={anchorEl}
      open={open}
    />
  );
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Fundraiser Platform
            </Typography>
            {links}
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};
export default connect(mapStateToProps)(MenuAppBar);

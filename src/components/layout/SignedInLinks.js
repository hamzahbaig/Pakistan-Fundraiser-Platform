import React, { Profiler } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";
import AccountCircle from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const SignedInLinks = props => {
  return (
    <div>
      <IconButton onClick={props.handleMenu} color="inherit">
        <AccountCircle />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={props.anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        open={props.open}
        onClose={props.handleClose}
      >
        <MenuItem
          onClick={props.handleClose}
          component={NavLink}
          to={"/dashboard"}
        >
          Dashboard
        </MenuItem>
        <MenuItem
          onClick={() => {
            props.signOut();
            props.handleClose();
          }}
          component={NavLink}
          to={"/"}
        >
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);

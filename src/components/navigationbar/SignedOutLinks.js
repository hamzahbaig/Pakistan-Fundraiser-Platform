import React from "react";
import { NavLink } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";

const SignedOutLinks = props => {
  return (
    <div>
      <IconButton onClick={props.handleMenu} color="inherit">
        <MenuIcon />
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
          component={NavLink}
          to={"/signup"}
          onClick={props.handleClose}
        >
          SignUp
        </MenuItem>
        <MenuItem
          onClick={props.handleClose}
          component={NavLink}
          to={"/signin"}
        >
          Login
        </MenuItem>
      </Menu>
    </div>
  );
};

export default SignedOutLinks;

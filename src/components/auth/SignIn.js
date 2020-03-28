import React from "react";
import SignInForm from "./SignInForm";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";

export class SignIn extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = input => e => {
    e.preventDefault();
    this.setState({ [input]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.signIn(this.state);
  };
  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <SignInForm
        email={this.state.email}
        password={this.state.password}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};
const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

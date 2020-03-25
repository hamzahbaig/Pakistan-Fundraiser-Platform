import React, { Component } from "react";
import LoginDetailsForm from "./LoginDetailsForm";
import PersonalDetailsForm from "./PersonalDetailsForm";
import IndividualForm from "./IndividualForm";
import NGOForm from "./NGOForm";
import { connect } from "react-redux";
import { signUp } from "../../store/actions/authActions";
import { useTheme } from "@material-ui/core";
import Success from "./Success";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Redirect } from "react-router-dom";

export class UserForm extends Component {
  state = {
    step: 1,
    email: "",
    password: "",
    userType: "",
    individualFirstName: "",
    individualLastName: "",
    individualCity: "",
    individualAddress: "",
    individualContact: "",
    individualCNIC: "",
    ngoName: "",
    ngoEmail: "",
    ngoCity: "",
    ngoAddress: "",
    ngoContact: "",
    ngoWebsiteLink: ""
  };

  nextStep = () => {
    console.log("ham,zahh");
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  skipStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 2
    });
  };
  prevSkipStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 2
    });
  };

  handleChange = input => e => {
    e.preventDefault();
    this.setState({ [input]: e.target.value });
  };

  handleSubmit = () => {
    this.props.signUp(this.state);
  };

  render() {
    const { auth, authError, status } = this.props;
    const { step } = this.state;
    const {
      email,
      password,
      userType,
      individualFirstName,
      individualLastName,
      individualCity,
      individualCNIC,
      individualContact,
      individualAddress,
      ngoName,
      ngoAddress,
      ngoCity,
      ngoContact,
      ngoEmail,
      ngoWebsiteLink
    } = this.state;

    const values = {
      email,
      password,
      userType,
      individualFirstName,
      individualLastName,
      individualCity,
      individualCNIC,
      individualContact,
      individualAddress,
      ngoName,
      ngoAddress,
      ngoCity,
      ngoContact,
      ngoEmail,
      ngoWebsiteLink
    };
    if (authError == "success") return <Success history={this.props.history} />;
    switch (step) {
      case 1:
        if (auth.uid) {
          return <Redirect to="/" />;
        } else {
          return (
            <LoginDetailsForm
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
            />
          );
        }
      case 2:
        return (
          <PersonalDetailsForm
            nextStep={this.nextStep}
            skipStep={this.skipStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <IndividualForm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            skipStep={this.skipStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <NGOForm
            nextStep={this.nextStep}
            prevSkipStep={this.prevSkipStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 5:
        this.handleSubmit();
        this.nextStep();
      case 6:
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: window.innerHeight
            }}
          >
            <CircularProgress size={60} />
          </div>
        );
    }
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: newUser => dispatch(signUp(newUser))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);

import React, { Component } from "react";
import LoginDetailsForm from "./LoginDetailsForm";
import PersonalDetailsForm from "./PersonalDetailsForm";
import IndividualForm from "./IndividualForm";
import NGOForm from "./NGOForm";

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
    console.log("gamza");
    e.preventDefault();
    console.log(input, e.target.value);
    this.setState({ [input]: e.target.value });
    console.log(this.state);
  };
  render() {
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

    switch (step) {
      case 1:
        return (
          <LoginDetailsForm
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
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
    }
  }
}

export default UserForm;

import React, { Component } from "react";
import CampaignFor from "./campaignfor/CampaignFor";
import CauseDetails from "./causedetails/CauseDetails";
import ElaborateCause from "./elaboratecause/ElaborateCause";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

export class StartCampaign extends Component {
  state = {
    step: 1,
    campaignFor: "Myself",
    causeDetails: "Education",
  };

  setCampaignFor = (value) => {
    this.setState({ campaignFor: value });
  };

  setCauseDetails = (value) => {
    this.setState({ causeDetails: value });
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  render() {
    const { step } = this.state;
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    switch (step) {
      case 1:
        return (
          <CampaignFor
            nextStep={this.nextStep}
            step={this.state.step}
            campaignFor={this.state.campaignFor}
            setCampaignFor={this.setCampaignFor}
          />
        );
      case 2:
        return (
          <CauseDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            step={this.state.step}
            causeDetails={this.state.causeDetails}
            setCauseDetails={this.setCauseDetails}
          />
        );
      case 3:
        return (
          <ElaborateCause
            prevStep={this.prevStep}
            step={this.state.step}
            history={this.props.history}
          />
        );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps, null)(StartCampaign);

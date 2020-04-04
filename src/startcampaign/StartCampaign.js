import React, { Component } from "react";
import CampaignFor from "./campaignfor/CampaignFor";
import CauseDetails from "./causedetails/CauseDetails";

import ElaborateCause from "./elaboratecause/ElaborateCause";
export class StartCampaign extends Component {
  state = {
    step: 1
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

  render() {
    const { step } = this.state;
    switch (step) {
      case 1:
        return <CampaignFor nextStep={this.nextStep} step={this.state.step} />;
      case 2:
        return (
          <CauseDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            step={this.state.step}
          />
        );
      case 3:
        return (
          <ElaborateCause prevStep={this.prevStep} step={this.state.step} />
        );
    }
  }
}

export default StartCampaign;

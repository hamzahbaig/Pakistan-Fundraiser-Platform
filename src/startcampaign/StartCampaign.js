import React, { Component } from "react";
import CampaignFor from "./campaignfor/CampaignFor";
import CauseDetails from "./causedetails/CauseDetails";

export class StartCampaign extends Component {
  render() {
    return (
      <div>
        {/* <CampaignFor /> */}
        <CauseDetails />
      </div>
    );
  }
}

export default StartCampaign;

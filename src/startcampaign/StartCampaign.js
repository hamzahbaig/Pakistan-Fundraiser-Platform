import React, { Component } from "react";
import CampaignFor from "./campaignfor/CampaignFor";
import CauseDetails from "./causedetails/CauseDetails";

import ElaborateCause from "./elaboratecause/ElaborateCause"
export class StartCampaign extends Component {
  render() {
    return (
      <div>
        {/* <CampaignFor /> */}
        {/* <CauseDetails /> */}
        <ElaborateCause />
      </div>
    );
  }
}

export default StartCampaign;

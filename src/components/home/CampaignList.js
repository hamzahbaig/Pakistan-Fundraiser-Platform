import React from "react";
import CardComponent from "./CardComponent";

const CampaignList = ({ campaigns }) => {
  return (
    <>
      {campaigns &&
        campaigns.map((campaign) => <CardComponent campaign={campaign} />)}
    </>
  );
};

export default CampaignList;
 
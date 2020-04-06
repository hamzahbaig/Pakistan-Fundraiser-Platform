import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from "moment";

const CampaignPage = (props) => {
  const { campaign, auth } = props;
  if (campaign) {
    return (
      <div className="container section project-details">
        <div className="card z-depth=0">
          <div className="card-content">
            <span className="card-title">{campaign.campaignTitle}</span>
            <p>{campaign.story}</p>
            <div className="card-action  lighten-4 grey-text">
              <div>
                {/* Posted by {project.authorFirstName} {project.authorLastName} */}
              </div>
              <div>{moment(campaign.createdAt.toDate()).calendar()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading Project...</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const campaigns = state.firestore.data.campaigns;
  const campaign = campaigns ? campaigns[id] : null;
  return {
    campaign,
    auth: state.firebase.auth,
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "campaigns", orderBy: ["createdAt", "desc"] },
  ])
)(CampaignPage);

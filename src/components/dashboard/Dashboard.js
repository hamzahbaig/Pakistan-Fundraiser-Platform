import React from "react";
import Notifications from "./Notifications";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

class Dashboard extends React.Component {
  handleClick = e => {
    this.props.history.push(`/category/${e.target.id}`);
  };
  render() {
    const { projects, auth, notifications } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="input-field col s12 m3">
            <button
              onClick={this.handleClick}
              id="education"
              className="btn pink lighten-1 z-depth-0"
            >
              Education
            </button>
          </div>
          <div className="input-field col s12 m3">
            <button
              onClick={this.handleClick}
              id="health"
              className="btn pink lighten-1 z-depth-0"
            >
              Health
            </button>
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications notifications={notifications} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "notifications", limit: 3, orderBy: ["time", "desc"] }
  ])
)(Dashboard);

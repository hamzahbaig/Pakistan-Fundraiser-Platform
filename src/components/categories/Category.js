import React from "react";
import { compose } from "redux";
import { connect, useSelector } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import ProjectList from "../projects/ProjectList";
import { getFirestore } from "redux-firestore";

class Category extends React.Component {
  render() {
    const { projects } = this.props;
    return (
      <div>
        <h1>{this.props.match.params.id}</h1>
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
        </div>
      </div>
    );
  }
}

// I can remove flicker by dispatching an action to clean the previous state
const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  return {
    projects: state.firestore.ordered[id]
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(ownProps => {
    const { id } = ownProps.match.params;
    return [
      {
        collection: "projects/fundraisers/" + id,
        orderBy: ["createdAt", "desc"],
        storeAs: id
      }
    ];
  })
)(Category);

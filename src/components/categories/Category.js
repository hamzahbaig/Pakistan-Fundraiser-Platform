import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import ProjectList from "../projects/ProjectList";

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

const mapStateToProps = state => {
  return {
    projects: state.firestore.ordered.projects
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "projects",
      orderBy: ["createdAt", "desc"]
    }
  ])
)(Category);

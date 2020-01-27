import React from "react";

const ProjectDetails = props => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            My name is Hamzah Baig.My name is Hamzah Baig.My name is Hamzah
            Baig.My name is Hamzah Baig.My name is Hamzah Baig.My name is Hamzah
            Baig.My name is Hamzah Baig.My name is Hamzah Baig.My name is Hamzah
            Baig.My name is Hamzah Baig.My name is Hamzah Baig.My name is Hamzah
            Baig.My name is Hamzah Baig.My name is Hamzah Baig.
          </p>
          <div className="card-action  lighten-4 grey-text">
            <div>Posted by the Net Ninja</div>
            <div>2nd September, 2am</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;

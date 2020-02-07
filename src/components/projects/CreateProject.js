import React from "react";
import { connect } from "react-redux";
import { createProject } from "../../store/actions/projectActions";
import { Redirect } from "react-router-dom";

class CreateProject extends React.Component {
  state = {
    title: "",
    content: "",
    category: "",
    activeList: [false, false, false]
  };

  handleChange = e => {
    let temp = [false, false, false];
    temp[e.target.id] = true;
    this.setState({
      activeList: temp
    });
    console.log(this.state.activeList);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createProject(this.state);
    this.props.history.push("/");
  };

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div className="container">
        {/* <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create New Project</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="title">Category</label>
            <input type="text" id="category" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Project Content</label>
            <textarea
              id="content"
              className="materialize-textarea"
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
          </div>
        </form> */}
        <div className="row">
          <div className="input-field col m4">
            <button
              id={0}
              value={this.state.activeList[0]}
              onClick={this.handleChange}
              className="btn pink lighten-1 z-depth-0"
            >
              Myself
            </button>
          </div>
          <div className="input-field col m4">
            <button
              id={1}
              value={this.state.activeList[1]}
              onClick={this.handleChange}
              className="btn pink lighten-1 z-depth-0"
            >
              Family
            </button>
          </div>
          <div className="input-field col m4">
            <button
              id={2}
              value={this.state.activeList[2]}
              onClick={this.handleChange}
              className="btn pink lighten-1 z-depth-0"
            >
              Friends
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};
const mapDispatchToProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);

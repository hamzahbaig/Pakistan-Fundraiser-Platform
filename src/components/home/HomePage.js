import React, { Component } from "react";
import MainSection from "./MainSection";
import CategorySection from "./CategorySection";

export class HomePage extends Component {
  render() {
    return (
      <div>
        <MainSection history={this.props.history} />
        <CategorySection />
      </div>
    );
  }
}

export default HomePage;

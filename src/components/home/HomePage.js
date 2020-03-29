import React, { Component } from "react";
import MainSection from "./MainSection";
import CategorySection from "./CategorySection";

export class HomePage extends Component {
  render() {
    return (
      <div>
        <MainSection />
        <CategorySection />
      </div>
    );
  }
}

export default HomePage;

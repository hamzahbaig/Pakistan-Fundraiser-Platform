import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProjectDetails from "./components/projects/ProjectDetails";
import SignIn from "./components/auth/SignIn";
import CreateProject from "./components/projects/CreateProject";
import Category from "./components/categories/Category";
import UserForm from "./components/auth/UserForm";
import { useSelector } from "react-redux";
import { isLoaded } from "react-redux-firebase";
import MenuAppBar from "./components/navigationbar/MenuAppBar";
import HomePage from "./components/home/HomePage";
import StartCampaign from "./startcampaign/StartCampaign";
function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth);
  if (!isLoaded(auth)) return null;
  console.log(auth);
  return children;
}

function App() {
  return (
    <BrowserRouter>
      <AuthIsLoaded>
        <div className="App">
          <MenuAppBar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/startcampaign" component={StartCampaign} />
            <Route exact path="/project/:id" component={ProjectDetails} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={UserForm} />
            <Route exact path="/create" component={CreateProject} />
            <Route exact path="/category/:id" component={Category} />
          </Switch>
        </div>
      </AuthIsLoaded>
    </BrowserRouter>
  );
}

export default App;

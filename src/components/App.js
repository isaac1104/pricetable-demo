import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "../pages/Home";
import MR33 from "../pages/MR33";
import AP122 from "../pages/AP122";

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <Navbar/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/mr33" component={MR33}/>
            <Route exact path="/ap122" component={AP122}/>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;

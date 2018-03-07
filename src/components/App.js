import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "../pages/Home";
import MR33 from "../pages/MR33";

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <Navbar/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/mr33" component={MR33}/>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;

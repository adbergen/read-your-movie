import React, { Component } from "react";
import "./App.css";

import Nav from "./components/Nav";
import Library from "./pages/Library";
import Search from "./pages/Search";
import NoMatch from "./pages/NoMatch";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Router>
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/library" component={Library} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

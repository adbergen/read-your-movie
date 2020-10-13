import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import NavBar from "./components/Nav/nav-bar";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path={["/", "/home"]}>
            <Home />
          </Route>

          <Route exact path={["/dashboard", "/games"]}>
            <Dashboard />
          </Route>

          <Route exact path="/dashboard/:id">
            <Detail />
          </Route>

          <Route component={Home} />

          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;

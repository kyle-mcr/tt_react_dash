import React from "react";
import NavBar from "./components/NavBar";
import PrivateRoute from "./components/PrivateRoute";

// New - import the React Router components, and the Profile page component
import { Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import history from "./utils/history";
import Home from './components/Home';
import Dashboard from "./components/Dashboard";
import Devices from "./components/Devices";
import Accounts from "./components/Accounts";
import Pickups from "./components/Pickups";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Don't forget to include the history module */}
      <Router history={history}>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path="/" component={Home} exact />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/devices" component={Devices} />
          <PrivateRoute path="/accounts" component={Accounts} />
          <PrivateRoute path="/pickups" component={Pickups} />
          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
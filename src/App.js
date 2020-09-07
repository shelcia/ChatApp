import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Chat from "./components/Chat";
import "./styles/style.css";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/chat" component={Chat} />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;

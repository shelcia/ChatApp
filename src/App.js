import React from "react";
import useLocalStorage from "./components/customHooks/useLocalStorage";
import Dashboard from "./components/Dashboard";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
// import Chat from "./components/Chat";
import "./styles/style.css";

const App = () => {
  const [id, setId] = useLocalStorage("id");
  return (
    <React.Fragment>
      {id ? <Dashboard id={id} /> : <Login setId={setId} />}
    </React.Fragment>
  );
};

export default App;

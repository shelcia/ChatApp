import React from "react";
import { ContactsProvider } from "./components/Context/ContactsProvider";
import useLocalStorage from "./components/customHooks/useLocalStorage";
import Dashboard from "./components/Dashboard";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import "./styles/style.css";

const App = () => {
  const [id, setId] = useLocalStorage("id");
  return (
    <React.Fragment>
      <ContactsProvider>
        {id ? <Dashboard id={id} /> : <Login setId={setId} />}
      </ContactsProvider>
    </React.Fragment>
  );
};

export default App;

import React from "react";
import { ContactsProvider } from "./components/Context/ContactsProvider";
import { ChatsProvider } from "./components/Context/ChatsProvider";

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
        <ChatsProvider id={id}>
          {id ? <Dashboard id={id} /> : <Login setId={setId} />}
        </ChatsProvider>
      </ContactsProvider>
    </React.Fragment>
  );
};

export default App;

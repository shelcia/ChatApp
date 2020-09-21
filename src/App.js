import React from "react";
import { ContactsProvider } from "./components/Context/ContactsProvider";
import { ChatsProvider } from "./components/Context/ChatsProvider";
import { SocketProvider } from "./components/Context/SocketProvider";

import useLocalStorage from "./components/customHooks/useLocalStorage";
import Dashboard from "./components/Dashboard";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import "./styles/style.css";

const App = () => {
  const [id, setId] = useLocalStorage("id");

  const whatsappId = localStorage.getItem("whatsapp-clone-id");

  return (
    <React.Fragment>
      <SocketProvider id={id}>
        <ContactsProvider>
          <ChatsProvider id={id}>
            {typeof whatsappId === "undefined" ? (
              <Login setId={setId} />
            ) : id ? (
              <Dashboard id={id} />
            ) : (
              <Login setId={setId} />
            )}
          </ChatsProvider>
        </ContactsProvider>
      </SocketProvider>
    </React.Fragment>
  );
};

export default App;

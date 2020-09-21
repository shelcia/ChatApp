import React from "react";
import Login from "./Login";
import useLocalStorage from "../components/customHooks/useLocalStorage";
import Dashboard from "./Dashboard";
import { ContactsProvider } from "../components/Context/ContactsProvider";
import { ConversationsProvider } from "../components/Context/ConversationsProvider";
import { SocketProvider } from "../components/Context/SocketProvider";
import "../styles/style.css";

const App = () => {
  const [id, setId] = useLocalStorage("id");

  const dashboard = (
    <SocketProvider id={id}>
      <ContactsProvider>
        <ConversationsProvider id={id}>
          <Dashboard id={id} />
        </ConversationsProvider>
      </ContactsProvider>
    </SocketProvider>
  );

  return id ? dashboard : <Login onIdSubmit={setId} />;
};

export default App;

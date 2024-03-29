import React from "react";
import Login from "./pages/Login";
import useLocalStorage from "./hooks/useLocalStorage";
import Dashboard from "./pages/Dashboard";
import { ContactsProvider } from "./context/ContactsProvider";
import { ConversationsProvider } from "./context/ConversationsProvider";
import { SocketProvider } from "./context/SocketProvider";
import { Toaster } from "react-hot-toast";
import "./styles/style.css";

const App = () => {
  const [id, setId] = useLocalStorage("id");

  const dashboard = (
    <SocketProvider id={id}>
      <ContactsProvider>
        <ConversationsProvider id={id}>
          <Toaster position="top-center" reverseOrder={false} />
          <Dashboard id={id} />
        </ConversationsProvider>
      </ContactsProvider>
    </SocketProvider>
  );

  return id ? dashboard : <Login onIdSubmit={setId} />;
};

export default App;

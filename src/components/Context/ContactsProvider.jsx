import React, { createContext } from "react";
import useLocalStorage from "../customHooks/useLocalStorage";

export const ContactsContext = createContext();

export const ContactsProvider = ({ children }) => {
  const [contacts, setContacts] = useLocalStorage("contacts", []);

  const createContact = (id, name) => {
    setContacts((prevContact) => {
      return [...prevContact, { id, name }];
    });
  };

  return (
    <React.Fragment>
      <ContactsContext.Provider value={{ contacts, createContact }}>
        {children}
      </ContactsContext.Provider>
    </React.Fragment>
  );
};

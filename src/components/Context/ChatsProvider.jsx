import React, { createContext, useContext } from "react";
import useLocalStorage from "../customHooks/useLocalStorage";
import { ContactsContext } from "../Context/ContactsProvider";

export const ChatsContext = createContext();

export const ChatsProvider = ({ children }) => {
  const [chats, setChats] = useLocalStorage("chats", []);

  const { contacts } = useContext(ContactsContext);

  const createChats = (recipients) => {
    setChats((prevChat) => {
      return [...prevChat, { recipients, messages: [] }];
    });
  };

  //ADDING NAMES TO CONTACT IF PRESENT

  const formattedChats = chats.map((chat) => {
    const recipients = chat.recipients.map((recipient) => {
      const contact = contacts.find((contact) => {
        return contact.id === recipient;
      });

      const name = (contact && contact.name) || recipient;
      return { id: recipient, name };
    });
    return { ...chat, recipients };
  });

  return (
    <React.Fragment>
      <ChatsContext.Provider value={{ chats, createChats, formattedChats }}>
        {children}
      </ChatsContext.Provider>
    </React.Fragment>
  );
};

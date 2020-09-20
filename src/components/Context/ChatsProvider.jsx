import React, { createContext, useContext, useState, useCallback } from "react";
import useLocalStorage from "../customHooks/useLocalStorage";
import { ContactsContext } from "../Context/ContactsProvider";

export const ChatsContext = createContext();

export const ChatsProvider = ({ id, children }) => {
  const [chats, setChats] = useLocalStorage("chats", []);
  const [selectedChatIndex, setSelectedChatIndex] = useState(0);

  const { contacts } = useContext(ContactsContext);

  //ADDING NAMES TO APP

  const createChats = (recipients) => {
    setChats((prevChat) => {
      return [...prevChat, { recipients, messages: [] }];
    });
  };

  //ADDING NAMES TO CONTACT IF PRESENT

  const formattedChats = chats.map((chat, index) => {
    const recipients = chat.recipients.map((recipient) => {
      const contact = contacts.find((contact) => {
        return contact.id === recipient;
      });

      const name = (contact && contact.name) || recipient;
      return { id: recipient, name };
    });
    //THE CHAT WHICH IS BEING SELECTED
    const selected = index === selectedChatIndex;
    return { ...chat, recipients, selected };
  });

  const addMessageToChat = useCallback(
    ({ selectedChat, message, sender }) => {
      setChats((prevChats) => {
        let madeChange = false;
        const newMessage = { sender, message };
        const newConversations = prevChats.map((chat) => {
          if (arrayEquality(chat.recipients, selectedChat)) {
            madeChange = true;
            return {
              ...chat,
              messages: [...chat.messages, newMessage],
            };
          }

          return chat;
        });

        if (madeChange) {
          return newConversations;
        } else {
          return [...prevChats, { selectedChat, messages: [newMessage] }];
        }
      });
    },
    [setChats]
  );

  const sendMessage = (selectedChat, message) => {
    addMessageToChat({ selectedChat, message, sender: id });
  };

  return (
    <React.Fragment>
      <ChatsContext.Provider
        value={{
          chats,
          createChats,
          formattedChats,
          setSelectedChatIndex,
          selectedChatIndex,
          selectedChat: formattedChats[selectedChatIndex],
          sendMessage,
        }}
      >
        {children}
      </ChatsContext.Provider>
    </React.Fragment>
  );
};

const arrayEquality = (a, b) => {
  if (a.length !== b.length) return false;

  a.sort();
  b.sort();

  return a.every((element, index) => {
    return element === b[index];
  });
};

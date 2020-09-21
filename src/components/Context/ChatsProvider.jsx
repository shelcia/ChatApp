import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import useLocalStorage from "../customHooks/useLocalStorage";
import { ContactsContext } from "../Context/ContactsProvider";
import { SocketContext } from "../Context/SocketProvider";

export const ChatsContext = createContext();

export const ChatsProvider = ({ id, children }) => {
  const [chats, setChats] = useLocalStorage("chats", []);
  const [selectedChatIndex, setSelectedChatIndex] = useState(0);
  let formattedChats = [];

  const { contacts } = useContext(ContactsContext);
  const { socket } = useContext(SocketContext);

  console.table(chats);

  //ADDING NAMES TO APP

  const createChats = (recipients) => {
    setChats((prevChat) => {
      return [...prevChat, { recipients, messages: [] }];
    });
  };

  //ADDING NAMES TO CONTACT IF PRESENT
  if (typeof chats !== "undefined") {
    console.log("chats:", chats);
    formattedChats = chats.map((chat, index) => {
      console.log("chat:", chat);
      const recipients = chat.recipients.map((recipient) => {
        console.log("recipient:", recipient);
        const contact = contacts.find((contact) => {
          return contact.id === recipient;
        });

        const name = (contact && contact.name) || recipient;
        return { id: recipient, name };
      });

      console.table(chat.messages);

      const messages = chat.messages.map((message) => {
        const contact = contacts.find((contact) => {
          return contact.id === message.sender;
        });
        const name = (contact && contact.name) || message.sender;
        const fromMe = id === message.sender;
        return { ...message, sender: name, fromMe };
      });

      //THE CHAT WHICH IS BEING SELECTED
      const selected = index === selectedChatIndex; //RETURNS BOOLEAN
      return { ...chat, messages, recipients, selected };
      // return { ...chat, recipients, selected };
    });
  }

  const addMessageToChat = useCallback(
    ({ selectedChat, message, sender }) => {
      console.table("addMessageToChat", selectedChat, message, sender);
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

  useEffect(() => {
    if (socket == null) return;
    socket.on("receive-message", ({ selectedChat, message, sender }) => {
      console.log("receive-message", selectedChat, message, sender);
      const value = {
        selectedChat,
        message,
        sender,
      };
      addMessageToChat(value);
    });
    // socket.on("receive-message", addMessageToChat);

    return () => socket.off("receive-message");
  }, [addMessageToChat, socket]);

  const sendMessage = (selectedChat, message) => {
    console.log(message);
    socket.emit("send-message", { recipients: selectedChat, message });
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

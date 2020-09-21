import React, { createContext, useEffect, useState } from "react";
import io from "socket.io-client";

export const SocketContext = createContext();

export const SocketProvider = ({ id, children }) => {
  const [socket, setSocket] = useState();
  const ENDPOINT = "http://localhost:4000";
  // const ENDPOINT = "https://whatsapp-clone-server-nodejs.herokuapp.com/";

  useEffect(() => {
    const newSocket = io(ENDPOINT, { query: { id } });
    setSocket(newSocket);

    return () => newSocket.close();
  }, [id]);

  return (
    <React.Fragment>
      <SocketContext.Provider value={{ socket }}>
        {children}
      </SocketContext.Provider>
    </React.Fragment>
  );
};

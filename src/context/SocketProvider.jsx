import React, { useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

const SocketContext = React.createContext();

export function useSocket() {
  return useContext(SocketContext);
}

export function SocketProvider({ id, children }) {
  const [socket, setSocket] = useState();
  // const ENDPOINT = "http://localhost:8000";
  const ENDPOINT = "https://whatsapp-clone-server-nodejs.herokuapp.com/";

  useEffect(() => {
    const newSocket = io(ENDPOINT, { query: { id } });
    setSocket(newSocket);

    return () => newSocket.close();
  }, [id]);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
}

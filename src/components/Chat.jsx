import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import queryString from "query-string";
import io from "socket.io-client";
const ENDPOINT = "localhost:8000";

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  useEffect(() => {
    // const data = queryString.parse(location.search);
    // console.log(location.search);
    // console.log(data);
    const { name, room } = queryString.parse(location.search);
    let socket = io(ENDPOINT);
    console.log(socket);
    setName(name);
    setRoom(room);
    socket.emit("join", { name, room }, ({ error }) => {
      alert(error);
    });
    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [location.search]);
  return (
    <React.Fragment>
      <h1>Chat</h1>
      <h1>hi</h1>
    </React.Fragment>
  );
};

export default Chat;

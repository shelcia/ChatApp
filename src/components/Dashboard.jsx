import React from "react";
import { Row } from "react-bootstrap";
import Sidebar from "../components/SideBar/SideBar";
import { useConversations } from "../components/Context/ConversationsProvider";
import Navbar from "./Navbar";
import Footer from "./Footer";
import EmptyChat from "./EmptyChat";
import OpenConversation from "./Chat/OpenConversation";

export default function Dashboard({ id }) {
  const { selectedConversation } = useConversations();

  return (
    <React.Fragment>
      <Navbar id={id} />
      <div className="container-fluid" style={{ height: "85vh" }}>
        <Row>
          <div className="col-sm-3">
            <Sidebar id={id} />
          </div>
          <div className="col-sm-9">
            {!selectedConversation && <EmptyChat />}
            {selectedConversation && <OpenConversation />}
          </div>
        </Row>
      </div>
      <Footer />
    </React.Fragment>
  );
}

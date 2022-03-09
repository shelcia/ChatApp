import React from "react";
import { Row } from "react-bootstrap";
import { useConversations } from "../context/ConversationsProvider";
import Sidebar from "../components/sidebar/Menu";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import EmptyChat from "../components/chat/EmptyChat";
import OpenConversation from "../components/chat/OpenConversation";

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

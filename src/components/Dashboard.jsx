import React from "react";
import { Row } from "react-bootstrap";
import Sidebar from "../components/SideBar/SideBar";
import OpenConversation from "../components/Chat/OpenConversation";
import { useConversations } from "../components/Context/ConversationsProvider";

export default function Dashboard({ id }) {
  const { selectedConversation } = useConversations();

  return (
    <React.Fragment>
      <div className="container-fluid mt-5 border" style={{ height: "85vh" }}>
        <Row>
          <div className="col-sm-4">
            <Sidebar id={id} />
          </div>
          <div className="col-sm-8">
            {selectedConversation && <OpenConversation />}
          </div>
        </Row>
      </div>
    </React.Fragment>
  );
}

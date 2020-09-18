import React, { useState } from "react";
import { Tab, Nav } from "react-bootstrap";

const CHAT_KEY = "chats";
const CONTACTS_KEY = "contacts";

const SideBar = ({ id }) => {
  const [activeKey, setActiveKey] = useState(CHAT_KEY);

  return (
    <React.Fragment>
      <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
        <Nav variant="tabs">
          <Nav.Item>
            <Nav.Link eventKey={CHAT_KEY}>Chats</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
          </Nav.Item>
        </Nav>
      </Tab.Container>
    </React.Fragment>
  );
};

export default SideBar;

import React, { useState } from "react";
import { Tab, Nav, Button, Modal } from "react-bootstrap";
import ContactsList from "./ContactsList";
import ChatsList from "./ChatsList";
import NewChatModal from "./NewChatModal";
import NewContactModal from "./NewContactModal";

const CHAT_KEY = "chats";
const CONTACTS_KEY = "contacts";

const SideBar = ({ id }) => {
  const [activeKey, setActiveKey] = useState(CHAT_KEY);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const activeTabName = activeKey === CHAT_KEY ? "Chat" : "Contact";

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
        <Tab.Content>
          <Tab.Pane eventKey={CHAT_KEY}>
            <ChatsList />
          </Tab.Pane>
          <Tab.Pane eventKey={CONTACTS_KEY}>
            <ContactsList />
          </Tab.Pane>
        </Tab.Content>
        <div>
          id:<span>{id}</span>
        </div>
        <Button onClick={() => setIsModalOpen(true)}>
          New {activeTabName}
        </Button>
      </Tab.Container>
      <Modal show={isModalOpen} onHide={closeModal}>
        {activeTabName === "Chat" ? (
          <NewChatModal closeModal={closeModal} />
        ) : (
          <NewContactModal closeModal={closeModal} />
        )}
      </Modal>
    </React.Fragment>
  );
};

export default SideBar;

import React, { useState } from "react";
import { Tab, Nav, Modal } from "react-bootstrap";
import Conversations from "./Conversations";
import Contacts from "./Contacts";
import NewContactModal from "./NewContactModal";
import NewConversationModal from "./NewConversationModal";
import "react-toastify/dist/ReactToastify.css";

const CONVERSATIONS_KEY = "conversations";
const CONTACTS_KEY = "contacts";

export default function Sidebar() {
  const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY);
  const [modalOpen, setModalOpen] = useState(false);
  const conversationsOpen = activeKey === CONVERSATIONS_KEY;

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="sidebar">
      <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
        <Nav variant="tabs">
          <Nav.Item>
            <Nav.Link eventKey={CONVERSATIONS_KEY}>Chats</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content>
          <div className="top pb-3">
            <h3 className="text-light mb-0 pl-3">
              {conversationsOpen ? "Chat" : "Contact"}
              <span
                className="material-icons pl-2"
                onClick={() => setModalOpen(true)}
                style={{ cursor: "pointer", color: "#369ee1" }}
              >
                &#xe148;
              </span>
            </h3>
          </div>
          <Tab.Pane eventKey={CONVERSATIONS_KEY}>
            <Conversations />
          </Tab.Pane>
          <Tab.Pane eventKey={CONTACTS_KEY}>
            <Contacts />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>

      <Modal show={modalOpen} onHide={closeModal}>
        {conversationsOpen ? (
          <NewConversationModal closeModal={closeModal} />
        ) : (
          <NewContactModal closeModal={closeModal} />
        )}
      </Modal>
    </div>
  );
}

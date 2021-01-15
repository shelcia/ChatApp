import React, { useState } from "react";
import { Tab, Nav, Button, Modal } from "react-bootstrap";
import Conversations from "./Conversations";
import Contacts from "./Contacts";
import Setting from "./Setting";
import NewContactModal from "./NewContactModal";
import NewConversationModal from "./NewConversationModal";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CONVERSATIONS_KEY = "conversations";
const CONTACTS_KEY = "contacts";
const SETTINGS_KEY = "settings";

export default function Sidebar({ id }) {
  const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY);
  const [modalOpen, setModalOpen] = useState(false);
  const conversationsOpen = activeKey === CONVERSATIONS_KEY;

  const closeModal = () => {
    setModalOpen(false);
  };

  const copyText = () =>
    toast.dark(
      "Your Id is copied to Clipboard. Now you can share it with your friends !!"
    );

  return (
    <div className="sidebar">
      <ToastContainer />
      <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
        <Nav variant="tabs">
          <Nav.Item>
            <Nav.Link eventKey={CONVERSATIONS_KEY}>Chats</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={SETTINGS_KEY}>Settings</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content>
          <Tab.Pane eventKey={CONVERSATIONS_KEY}>
            <Conversations />
          </Tab.Pane>
          <Tab.Pane eventKey={CONTACTS_KEY}>
            <Contacts />
          </Tab.Pane>
          <Tab.Pane eventKey={SETTINGS_KEY}>
            <Setting />
          </Tab.Pane>
        </Tab.Content>
        <div className="bottom">
          Your Id:{" "}
          <span className="text-muted" value={id}>
            {id}
            <CopyToClipboard text={id}>
              <i
                className="material-icons"
                style={{ fontSize: "13px", cursor: "pointer" }}
                onClick={() => copyText()}
              >
                &#xe14d;
              </i>
            </CopyToClipboard>
          </span>
          <Button onClick={() => setModalOpen(true)} className="button">
            New {conversationsOpen ? "Chat" : "Contact"}
          </Button>
        </div>
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

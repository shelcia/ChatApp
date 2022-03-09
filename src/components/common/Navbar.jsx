import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";

const Navbar = ({ id }) => {
  const logout = (event) => {
    event.preventDefault();
    localStorage.clear();
    window.location.reload(false);
  };

  const copyText = () =>
    toast.dark(
      "Your Id is copied to Clipboard. Now you can share it with your friends !!"
    );

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <React.Fragment>
      <ToastContainer />
      <nav
        className="navbar navbar-expand-sm bg-light mb-0 header d-flex justify-content-between px-3"
        style={{ height: "8vh" }}
      >
        <div>
          <h5 className="text-light d-inline">Chat App</h5>
          <button
            className="btn-primary button ms-4"
            // onClick={(e) => logout(e)}
            onClick={() => setModalOpen(true)}
          >
            Logout
          </button>
        </div>

        <div>
          <span className="text-light">
            <b>Your Id:</b>
          </span>{" "}
          <span className="text-light pe-2" value={id}>
            <span className="pe-3"> {id} </span>
            <CopyToClipboard text={id}>
              <i
                className="material-icons"
                style={{ fontSize: "16px", cursor: "pointer" }}
                onClick={() => copyText()}
              >
                &#xe14d;
              </i>
            </CopyToClipboard>
          </span>
        </div>
      </nav>
      <ModalLogout
        logout={logout}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
    </React.Fragment>
  );
};

export default Navbar;

const ModalLogout = ({ logout, modalOpen, setModalOpen }) => {
  return (
    <React.Fragment>
      <Modal show={modalOpen} onHide={() => setModalOpen(false)}>
        <Modal.Header closeButton>Logging Out !!!</Modal.Header>
        <Modal.Body>
          If you log out all your saved contacts and conversations will be
          deleted. We do not store any of your chats. There is no way to
          retrieve it.
          <div className="text-center mt-4">
            <Button
              type="button"
              className="btn btn-danger"
              onClick={(e) => logout(e)}
            >
              Logout and Delete
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

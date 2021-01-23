import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";

const Navbar = ({ id }) => {
  const logout = (event) => {
    event.preventDefault();
    localStorage.removeItem("whatsapp-clone-id");
    localStorage.removeItem("whatsapp-clone-contacts");
    localStorage.removeItem("whatsapp-clone-conversations");

    window.location.reload(false);
  };

  const copyText = () =>
    toast.dark(
      "Your Id is copied to Clipboard. Now you can share it with your friends !!"
    );

  return (
    <React.Fragment>
      <ToastContainer />
      <nav
        className="navbar navbar-expand-sm bg-light mb-0 header d-flex justify-content-between"
        style={{ height: "8vh" }}
      >
        <div>
          <h5 className="text-light d-inline">Chat App</h5>
          <button
            className="btn-primary button ml-4"
            data-toggle="modal"
            data-target="#myModal"
          >
            Logout
          </button>
        </div>

        <div>
          <span className="text-light">
            <b>Your Id:</b>
          </span>{" "}
          <span className="text-light pr-2" value={id}>
            <span className="pr-3"> {id} </span>
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
      <ModalLogout logout={logout} />
    </React.Fragment>
  );
};

export default Navbar;

const ModalLogout = ({ logout }) => {
  return (
    <React.Fragment>
      <div className="modal fade" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Logging Out !!!</h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <div className="modal-body border border-0">
              If you log out all your saved contacts and conversations will be deleted. We do not store any of your chats. There is no way to retrieve it.
            </div>
            <div className="modal-footer border border-0">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={(e) => logout(e)}
              >
                Logout and Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

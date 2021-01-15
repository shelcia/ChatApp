import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";

const Navbar = ({ id }) => {
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
        <a className="navbar-brand" href="/">
          <h6>Chat App</h6>
        </a>
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
    </React.Fragment>
  );
};

export default Navbar;

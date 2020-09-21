import React from "react";
import { Button } from "react-bootstrap";

const Settings = () => {
  const logout = (event) => {
    event.preventDefault();
    localStorage.removeItem("whatsapp-clone-id");
    localStorage.removeItem("whatsapp-clone-contacts");
    localStorage.removeItem("whatsapp-clone-conversations");

    window.location.reload(false);
  };

  return (
    <React.Fragment>
      <Button className="button w-100 mt-5" onClick={(event) => logout(event)}>
        Logout
      </Button>
    </React.Fragment>
  );
};

export default Settings;

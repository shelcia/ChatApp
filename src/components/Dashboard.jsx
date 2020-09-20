import React, { useContext } from "react";
import { Row } from "react-bootstrap";
import SideBar from "./SideBar/SideBar";
import { ChatsContext } from "../components/Context/ChatsProvider";
import OpenChat from "./Chat/OpenChat";

const Dashboard = ({ id }) => {
  const { setSelectedChatIndex } = useContext(ChatsContext);

  return (
    <React.Fragment>
      <div className="container mt-5">
        <Row>
          <div className="col-sm-4">
            <SideBar id={id} />
          </div>
          <div className="col-sm-8">{setSelectedChatIndex && <OpenChat />}</div>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;

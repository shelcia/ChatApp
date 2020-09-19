import React from "react";
import { Row } from "react-bootstrap";
import SideBar from "./SideBar/SideBar";

const Dashboard = ({ id }) => {
  return (
    <React.Fragment>
      <div className="container mt-5">
        <Row>
          <div className="col-sm-4">
            <SideBar id={id} />
          </div>
          <div className="col-sm-8"></div>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;

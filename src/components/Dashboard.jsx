import React from "react";
import SideBar from "./SideBar/SideBar";

const Dashboard = ({ id }) => {
  return (
    <React.Fragment>
      <SideBar id={id} />
    </React.Fragment>
  );
};

export default Dashboard;

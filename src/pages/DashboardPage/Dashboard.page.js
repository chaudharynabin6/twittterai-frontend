import React from "react";

// local import
import { DashboardProvider } from "./Dashboard.context";
import DashboardPresentor from "./Dashboard.presentor";

const DashboardPage = () => {
  return (
    <DashboardProvider>
      <DashboardPresentor />
    </DashboardProvider>
  );
};

export default DashboardPage;

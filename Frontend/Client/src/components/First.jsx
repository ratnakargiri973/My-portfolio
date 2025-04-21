import React from "react";
import "./First.css";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function First() {
  return (
    <div className="first-wrapper">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      
      <div className="content-container">
        <Outlet />
      </div>
    </div>
  );
}

export default First;

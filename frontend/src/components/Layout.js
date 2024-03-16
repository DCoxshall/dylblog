import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import "../App.css";

function Layout() {
    return (
        <div id="main-content">
            <Navbar />
            <hr />
            <Outlet />
        </div>
    );
}

export default Layout;

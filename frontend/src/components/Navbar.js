import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
    return (
        <div className="navbar">
            <Link to="/">home</Link>
            <Link to="/projects">projects</Link>
            <Link to="/blog">blog</Link>
            <a target="_blank" href="DylanCoxshallResume.pdf">
                resume
            </a>
        </div>
    );
}

export default Navbar;

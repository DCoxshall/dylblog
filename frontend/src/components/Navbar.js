import React from "react";
import {Link} from 'react-router-dom';

export default class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <Link to="/projects">projects</Link>
                <Link to="/resume">resume</Link>
            </div>
        )
    }
}

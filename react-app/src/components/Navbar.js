import React from "react";
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <Link to="/">home</Link>
                <Link to="/projects">projects</Link>
                <Link to="/pdf.pdf" target="_blank">resume</Link>
            </div>
        )
    }
}

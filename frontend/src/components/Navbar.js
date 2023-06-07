import React from "react";

export default class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <a href="http://localhost:3000/projects">projects</a>
                <a href="http://localhost:3000/resume">resume</a>
            </div>
        )
    }
}

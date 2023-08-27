import React from "react";

export default function ProjectCard(props) {
    return (
        <div className="ProjectCard">
            <img src={props.image} alt={props.title} />
            <div className="ProjectText">
                <h2><a href={props.github_link}>{props.title}</a></h2>
                <p>{props.description}</p>
            </div>
        </div>
    )
}
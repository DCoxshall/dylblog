import React from "react";
import "./ProjectCard.css";

function ProjectCard(props) {
    const {name, img_src} = props;
    console.log(name, img_src);
    return (
        <div>
            <p>{name}</p>
            <img className="project-card-img"src={img_src}></img>
        </div>
    )
}

export default ProjectCard;
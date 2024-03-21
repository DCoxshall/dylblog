import React from "react";
import ProjectCard from "./ProjectCard";
import data from './ProjectData.json'

function Projects() {
    return <div>
        {data.projects.map((project) => {
            return <ProjectCard img_src={project.img_src} name={project.name}></ProjectCard>
        })}
    </div>
}

export default Projects;

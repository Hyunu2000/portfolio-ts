import React from 'react';
import { Project } from '@interfaces/common';

interface Project2Props {
    project: Project;
}

const Project2: React.FC<Project2Props> = ({project}) => {
    return (
        <>
            <img className="project__img" src={project.img} alt={project.alt} />
            <div className="project__metadata">
                <h3 className="project__metadata__title">{project.title}</h3>
                <p>{project.description}</p>
            </div>
        </>
    );
}

export default Project2;
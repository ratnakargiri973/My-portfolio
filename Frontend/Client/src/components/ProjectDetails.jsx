import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './ProjectDetails.css';
import { MdOutlineArrowBack } from "react-icons/md";

function ProjectDetails() {
    const { id } = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        handleSingleProject();
    }, []);

    async function handleSingleProject() {
        try {
            const response = await axios.get(`https://my-portfolio-backend-a399.onrender.com/api/v1/project/get/${id}`);
            setProject(response.data.project);
            console.log(response.data.project);
        } catch (error) {
            console.log("Error in showing project details", error);
        }
    }

    if (!project) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div className="details-wrapper">
            <Link className='back-btn' to='/projects'><MdOutlineArrowBack /> Back To Projects Page</Link>
            <div className='details'>
            <img src={project.image} alt={project.name} className="project-image" />
            <div className="project-content">
                <h1>{project.name}</h1>
                <p className="project-description">{project.description}</p>
                <div className='features'>
                <ul>
                    <h2>Features: </h2>
                   {project.features.map((feature, index) => (
                   
                        <li>
                            <p>{feature}</p>
                        </li>
                   ))}
                   </ul>
                </div>
                <div className="tech-stack">
                    <h2>Tech Stack: </h2>
                    
                    {project.techStack.map((tech, index) => (
                        <span key={index}>{tech}</span>
                    ))}
                </div>
                <div className="project-links">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
                    {project.liveDemo && <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">Live Demo</a>}
                </div>
            </div>
            </div>
        </div>
    );
}

export default ProjectDetails;

import React from 'react'
import './ProjectCard.css'
import { Link } from 'react-router-dom'
import { FaGithub } from "react-icons/fa";

function ProjectCard({project}) {
  return (
    <div className='project-card'>
         <img src={project.image} alt="Image" />
         <div className='content'>
             <h3>{project.name}</h3>
             <div className='project-btns'>
                 <a href={project.githubLink}><FaGithub/> GitHub</a>
                 <a href={project.liveDemo}>Demo</a>
             </div>
             <Link className='detail' to={`/detail/${project._id}`}>Details</Link>
         </div>
    </div>
  )
}

export default ProjectCard

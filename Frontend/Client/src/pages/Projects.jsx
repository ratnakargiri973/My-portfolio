import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProjectCard from '../components/ProjectCard';
import './Project.css';
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { Link } from 'react-router-dom';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    handleGetProjects(currentPage);
  }, [currentPage]);

  async function handleGetProjects(page) {
    try {
      const response = await axios.get(`https://my-portfolio-backend-a399.onrender.com/api/v1/project/get?page=${page}`);
      setProjects(response.data.projects);
      setCurrentPage(response.data.currentPage);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.log("Error in fetching projects", error);
    }
  }

  function handlePrev() {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  }

  function handleNext() {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  }

  return (
    <div className='project-wrapper'>
      <h1>Projects</h1>
      <div className='add-btn'>
        <Link to='/Project-add' className='add-link'>Add Project</Link>
      </div>
      <div className='projects'>
        {projects.map((project) => (
          <ProjectCard project={project} key={project._id} />
        ))}
      </div>
      <div className='page'>
        <button onClick={handlePrev} disabled={currentPage === 1}>
          <MdArrowBackIos />
        </button>
        <span>{currentPage} / {totalPages}</span>
        <button onClick={handleNext} disabled={currentPage === totalPages}>
          <MdArrowForwardIos />
        </button>
      </div>
    </div>
  );
}

export default Projects;

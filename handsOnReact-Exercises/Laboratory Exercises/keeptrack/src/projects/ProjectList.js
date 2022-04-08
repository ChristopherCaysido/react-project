import React from "react";
import PropTypes from 'prop-types';
import { Project } from './Project';
import ProjectCard from './ProjectCard';
import ProjectForm from "./ProjectForm";


function ProjectList({ projects }){
    // return <pre>{JSON.stringify(projects,null,' ')}</pre>
  
    const items = projects.map(project =>(
      <div key={project.id} className="cols-sm">
        <ProjectCard project={project}/>
        <ProjectForm />
      </div>
    ))
    return <div className='Row'>{items}</div>   
    
  
}

ProjectList.propTypes = {
    projects: PropTypes.arrayOf(PropTypes.instanceOf(Project)).isRequired
};

export default ProjectList;